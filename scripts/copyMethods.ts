import fs from 'fs';
import path from 'path';

import {
  methods, createDirIfNeeded, copyFile, isDir
} from './utils';

const methodType = process.argv[2] as keyof typeof methods;
const outputDir = path.resolve('./website/generated');

createDirIfNeeded(outputDir);
createDirIfNeeded(`${outputDir}/methods/`);
createDirIfNeeded(`${outputDir}/demos/`);
createDirIfNeeded(`${outputDir}/posts/`);

// Copy methods as a markdown file
fs.readdir(methods[methodType], (err, files) => {
  if (err) throw err;

  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    // eslint-disable-next-line no-continue
    if (!isDir(path.join(methods[methodType], file))) continue;
    console.log(path.resolve(`${methods[methodType]}/${file}/${file}.ts`));

    // Copy method as a markdown file
    copyFile({
      source: path.resolve(`${methods[methodType]}/${file}/${file}.ts`),
      dest: path.resolve(`${outputDir}/methods/${file}.method.md`),
      toMarkdown: true,
      methodType
    });

    // Copy demo as a markdown file
    copyFile({
      source: path.resolve(`${methods[methodType]}/${file}/${file}.demo.ts`),
      dest: path.resolve(`${outputDir}/demos/${file}.demo.md`),
      toMarkdown: true,
      methodType
    });

    // Copy documentation file
    copyFile({
      source: path.resolve(`${methods[methodType]}/${file}/${file}.mdx`),
      dest: path.resolve(`${outputDir}/posts/${file}.post.mdx`),
      methodType
    });
  }
});
