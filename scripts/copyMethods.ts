import { createWriteStream } from 'fs';
import { readdir, readFile } from 'fs/promises';
import path from 'path';

import type { UtilDir, UtilDirs } from './utils';
import { log } from './utils';
import {
  checkFileExists, createDirIfNeeded, getFileName, isDir, utils
} from './utils';

// utils directory name
const type = process.argv[2] as keyof UtilDirs;
const outputDir = path.resolve('./website/generated');

const exportTypes: (keyof UtilDir)[] = [ 'methods' ];

exportTypes.forEach(async (et) => {
  try {
    createDirIfNeeded(outputDir);
    createDirIfNeeded(`${outputDir}/${type}`);
    createDirIfNeeded(`${outputDir}/${type}/${et}`);

    const exportTypeDir = path.resolve(utils[type][et]);

    const dirs = ((await readdir(utils[type][et])).filter(d => isDir(
      path.resolve(exportTypeDir, d)
    )));

    dirs.forEach(async (dir) => {
      const destination = path.resolve(`${outputDir}/${type}/${et}/${dir}.mdx`);
      const postPath = path.resolve(exportTypeDir, dir, `${dir}.post.mdx`);
      const demoPath = path.resolve(exportTypeDir, dir, `${dir}.demo.ts`);
      const sourcePath = path.resolve(exportTypeDir, dir, `${dir}.source.ts`);

      checkFileExists(postPath);
      checkFileExists(demoPath);
      checkFileExists(sourcePath);

      const post = await readFile(path.resolve(exportTypeDir, dir, `${dir}.post.mdx`), 'utf8');
      const demo = await readFile(path.resolve(exportTypeDir, dir, `${dir}.demo.ts`), 'utf8');
      const source = await readFile(path.resolve(exportTypeDir, dir, `${dir}.source.ts`), 'utf8');

      const writeStream = createWriteStream(destination);

      const preCode = '```ts';
      const exportRegex = /export default /;
      const importRegex = /from '..';$/;

      const transform = (line: string) => {
        let l = (exportRegex.test(line)
          ? line.replace(exportRegex, '')
          : line);

        l = importRegex.test(l)
          ? l.replace(importRegex, `from '@yondav/utils/${type}';`)
          : l;

        return l;
      };

      const streamData = `${post}\n\n### Source\n\n${preCode}\r${source.split('\n').map(transform).join('\n')}\`\`\`\r\n\n### Demo\n\n${preCode}\r${demo.split('\n').map(transform).join('\n')}\`\`\`\r`;

      writeStream.write(streamData);
      writeStream.end();

      log(`${getFileName(destination)} created`);
    });
  } catch (err) {
    console.error(err);
  }
});
