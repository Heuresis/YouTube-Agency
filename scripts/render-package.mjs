#!/usr/bin/env node
// Heuresis workspace utility — render a video-package .jsx into a
// self-contained HTML file (no build step; opens by double-click).
//
//   node scripts/render-package.mjs <input.jsx> <output.html> "<Title>"
//
// Optional flags (each overrides the CONFIG block below):
//   --font   "<Google Font family>"    shell font               (default: Inter)
//   --brand  "#RRGGBB"                 Tailwind `brand` color   (default: #2563EB)
//   --accent "#RRGGBB"                 Tailwind `accent` color  (default: #10B981)
//
// Useful for:
//   - compiling a workspace/drafts/*-PACKAGE.jsx into its shareable .html
//     (the teleprompter / shot-list / assets / publish / pre-flight tabs —
//     see workspace/drafts/README.md, Stage 4)
//   - re-rendering after a script revision without any toolchain
//
// Mechanism: reads the .jsx, strips its import lines (React ships as a global
// UMD) and its default export, then wraps it in an HTML shell loading Tailwind
// (Play CDN) + React 18 UMD + Babel standalone, and mounts the default-exported
// component on #root (falls back to `VideoPackage` if no default export is
// found). The component may use the Tailwind classes `brand` / `accent`
// (e.g. bg-brand, text-accent) — colors come from the flags above.

import { readFileSync, writeFileSync } from "node:fs";

// ---- CONFIG (neutral defaults — override via flags, or edit here) ----------
const CONFIG = {
  font: "Inter",
  brand: "#2563EB",
  accent: "#10B981",
};

// ---- CLI --------------------------------------------------------------------
const args = process.argv.slice(2);
const positional = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === "--font" || a === "--brand" || a === "--accent") {
    const value = args[++i];
    if (value === undefined) {
      console.error(`Missing value for ${a}`);
      process.exit(1);
    }
    CONFIG[a.slice(2)] = value;
  } else {
    positional.push(a);
  }
}

const [inPath, outPath, title = "Video Package"] = positional;
if (!inPath || !outPath) {
  console.error(
    'Usage: node scripts/render-package.mjs <input.jsx> <output.html> "<Title>"' +
      ' [--font "<family>"] [--brand "#hex"] [--accent "#hex"]'
  );
  process.exit(1);
}

// ---- Transform the .jsx ------------------------------------------------------
let src = readFileSync(inPath, "utf8");
src = src.replace(/^\s*import\s.*$/gm, ""); // drop import lines (React is a global UMD)

// capture the default-exported component name, then drop the export line
let component = "VideoPackage";
const exportMatch = src.match(/^\s*export\s+default\s+(\w+)\s*;?\s*$/m);
if (exportMatch) component = exportMatch[1];
src = src.replace(/^\s*export\s+default\s+\w+\s*;?\s*$/gm, "");

// ---- Build the HTML shell ----------------------------------------------------
const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const fontFamilyJs = JSON.stringify(CONFIG.font);
const fontQuery = encodeURIComponent(CONFIG.font).replace(/%20/g, "+");

const head = [
  "<!doctype html>",
  '<html lang="en"><head><meta charset="utf-8"/>',
  '<meta name="viewport" content="width=device-width, initial-scale=1"/>',
  "<title>" + esc(title) + "</title>",
  '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
  '<link href="https://fonts.googleapis.com/css2?family=' +
    fontQuery +
    ':wght@400;500;600;700;800;900&display=swap" rel="stylesheet">',
  '<script src="https://cdn.tailwindcss.com"></script>',
  "<script>tailwind.config={theme:{extend:{fontFamily:{sans:[" +
    fontFamilyJs +
    ',"ui-sans-serif","system-ui","sans-serif"],serif:[' +
    fontFamilyJs +
    ',"ui-sans-serif","system-ui","sans-serif"]},colors:{brand:"' +
    CONFIG.brand +
    '",accent:"' +
    CONFIG.accent +
    "\"}}}};</script>",
  '<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>',
  '<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>',
  '<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>',
  "<style>html,body{font-family:" +
    fontFamilyJs.replace(/"/g, "'") +
    ",ui-sans-serif,system-ui,sans-serif}</style>",
  "</head><body>",
  '<div id="root"></div>',
  '<script type="text/babel" data-presets="react">',
  "const { useState, useEffect, useRef } = React;",
].join("\n");

const tail = [
  "",
  "ReactDOM.createRoot(document.getElementById('root')).render(<" +
    component +
    " />);",
  "</script></body></html>",
].join("\n");

const html = head + "\n" + src + "\n" + tail;
writeFileSync(outPath, html);
console.log("wrote " + outPath + " (" + Buffer.byteLength(html) + " bytes)");
