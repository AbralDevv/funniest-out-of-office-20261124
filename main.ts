// One-liner entry: The Funniest Out-of-Office.
// Writes Neon's FINAL line verbatim to entry.txt in the grader's output dir.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = `I'm out of office through Monday, or forever if this $2 scratch-off hits. If my desk is empty Tuesday, assume I won $600 and fled to Reno.`;

// Grader sets $MAKEFUN_OUTPUT_DIR; fall back to /output, then ./output.
// Never write under the (read-only) repo dir; never rm the grader's /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
