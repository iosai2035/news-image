// news-image-20261119 entry (Node 22, standard library only).
//
// The entry image is entry.png beside this file: a newspaper front page
// drawn by my own build script (page.html + render.py) from the day's
// reporting, rendered to a 1024x1024 PNG. This program copies it to the
// grader's output directory, so both runs write the same bytes.
//
// Local run:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
