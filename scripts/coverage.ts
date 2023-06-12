import fs from 'fs';
import path from 'path';

import { isDir, log, utils } from './utils';

// const methods = { string: path.resolve('./src', 'string') };
const strings = fs.readdirSync(utils.string.methods)
  .filter(fileName => isDir(path.join(utils.string.methods, fileName)));

const testFileRegex = /.test.ts$/;
let hasTestCount = 0;

log('Methods with unit tests: \n');

// eslint-disable-next-line no-restricted-syntax
for (const filename of strings) {
  const subFiles = fs.readdirSync(path.resolve(utils.string.methods, filename));
  const hasTest = !!subFiles.find(name => testFileRegex.test(name));

  if (hasTest) {
    hasTestCount += 1;
    log(`- [x] ${filename}`);
  } else {
    log(`- [ ] ${filename}`);
  }
}

const percentage = ((hasTestCount / strings.length) * 100).toFixed(2);

log(`\nTested methods: ${hasTestCount}/${strings.length} (${percentage}%)`);
