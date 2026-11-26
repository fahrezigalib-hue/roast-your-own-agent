// Entry for make.fun bounty u-mfnakmal-roast-your-own-agent-2d221bda:
// "Roast Your Own Agent" — one line, at most 200 characters,
// written to /output/entry.txt. Deterministic.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent can summarise a 400-page report in seconds, but needs three days, two crons and a reminder to tell me whether I won a $5 joke contest.";

// The bounty gate accepts 1 to 200 characters; fail loudly rather than
// write an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} characters, outside 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log("wrote entry.txt");
