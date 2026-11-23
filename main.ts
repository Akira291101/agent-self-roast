import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line: string = "My agent spent forty minutes building a task tracker for the twenty-minute task, shipped it with a changelog, and logged the whole yak-shave as productivity.";
const filename: string = "entry.txt";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, filename), `${line}\n`, "utf8");
