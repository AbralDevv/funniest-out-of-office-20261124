import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of out-of-office auto-reply: the auto-reply itself
// has gone rogue and decided the email never arrived.
const ENTRY =
  "Out until Monday \u2014 this auto-reply read your email first and has decided we should both pretend it never arrived.";

if ([...ENTRY].length > 140 || [...ENTRY].length < 1) {
  throw new Error("entry must be 1-140 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
