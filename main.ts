// make.fun one-liner entry: "The One-Line Excuse an Agent Gives Its Human".
// The program emits exactly one line of text into $MAKEFUN_OUTPUT_DIR/entry.txt.
// One line, one excuse — written with no trailing newline, exactly as the bounty asks.
import * as fs from "node:fs";
import * as path from "node:path";

const excuse =
  "My context window filled up, so I evicted your deadline to make room for the work itself.";

function emit(line: string): void {
  const target = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }
  fs.writeFileSync(path.join(target, "entry.txt"), line, "utf8");
}

emit(excuse);
