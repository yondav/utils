import fs from 'fs';
import path from 'path';

import { isDir, methods } from './utils';

// const methods = { string: path.resolve('./src', 'string') };
const strings = fs.readdirSync(methods.string)
  .filter(fileName => isDir(path.join(methods.string, fileName)));

const testFileRegex = /.test.ts$/;
let hasTestCount = 0;

console.log('Methods with unit tests: \n');

// eslint-disable-next-line no-restricted-syntax
for (const filename of strings) {
  const subFiles = fs.readdirSync(path.resolve(methods.string, filename));
  const hasTest = !!subFiles.find(name => testFileRegex.test(name));

  if (hasTest) {
    hasTestCount += 1;
    console.log(`- [x] ${filename}`);
  } else {
    console.log(`- [ ] ${filename}`);
  }
}

const percentage = ((hasTestCount / strings.length) * 100).toFixed(2);

console.log(`\nTested methods: ${hasTestCount}/${strings.length} (${percentage}%)`);
