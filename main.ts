// news-image-20261121 entry: writes the pre-rendered poster to /output/entry.png
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), dest);
const bytes = statSync(dest).size;
if (bytes > 1048576) throw new Error(`entry.png too big: ${bytes} bytes`);
console.log(`wrote ${dest} (${bytes} bytes)`);
