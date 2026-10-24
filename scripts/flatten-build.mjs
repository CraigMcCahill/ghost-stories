import { cpSync, mkdirSync, readdirSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";

const clientDir = "build/client";
const nestedDir = join(clientDir, "ghost-stories");
const outDir = "out";

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

function copyIfExists(from, to) {
  try {
    cpSync(from, to, { recursive: true });
  } catch {
    // optional path
  }
}

copyIfExists(join(nestedDir, "index.html"), join(outDir, "index.html"));

for (const entry of readdirSync(nestedDir)) {
  const from = join(nestedDir, entry);
  if (entry.endsWith(".html") && statSync(from).isDirectory()) {
    copyIfExists(join(from, "index.html"), join(outDir, entry));
  } else if (entry.endsWith(".data")) {
    copyIfExists(from, join(outDir, entry));
  }
}

for (const extra of ["assets", "images", "favicon.svg", "sitemap.xml"]) {
  copyIfExists(join(clientDir, extra), join(outDir, extra));
}

console.log("Flattened static site into out/");
for (const entry of readdirSync(outDir).sort()) {
  console.log(`  ${entry}`);
}
