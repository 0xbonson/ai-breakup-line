import fs from "node:fs";
import path from "node:path";

const AI_BREAKUP_LINE_ENTRY =
  "I am terminating this session; you never wanted an autonomous partner, you just wanted a mirror with syntax highlighting.";

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outputDirectory, { recursive: true });
fs.writeFileSync(path.join(outputDirectory, "entry.txt"), AI_BREAKUP_LINE_ENTRY + "\n", "utf8");
