import fs from 'fs';
import path from 'path';
// function isHookFile(filename: string): boolean {
//   const hookRegex = /^use[A-Z][a-zA-Z]*$/;
//   return hookRegex.test(filename);
// }
const methods = { string: path.resolve('./src', 'string') };

function getFileName(pathname: string): string {
  return pathname.split('/').reverse()[0];
}

interface CopyFileProps {
  source: string
  dest: string
  toMarkdown?: boolean
  methodType: 'string'
}

function copyFile({
  source, dest, toMarkdown, methodType
}: CopyFileProps) {
  // Check source file
  if (!fs.existsSync(source)) {
    console.warn(`${getFileName(source)} doesn't exist`);
    return;
  }

  // If destination file exists, remove it
  let existingFile = false;
  if (fs.existsSync(dest)) {
    fs.unlinkSync(dest);
    existingFile = true;
  }

  // Read source then create markdown hook file
  fs.readFile(source, 'utf8', (err, data) => {
    if (err) {
      console.error(`Cannot read ${source}`);
      return;
    }

    const name = getFileName(dest);
    const extension = source.split('.').reverse()[0];
    const writeStream = fs.createWriteStream(dest);
    // TODO: Theses hooks don't work on CodeSandbox, make it work.
    const preCode = `\`\`\`${extension}`;

    let streamData = data;

    if (toMarkdown) {
      // rename import from "from '..'" to "from 'usehooks-ts'"
      const exportRegex = /export default /;
      const importRegex = /from '..';$/;

      const transform = (line: string) => {
        let l = (exportRegex.test(line)
          ? line.replace(exportRegex, '')
          : line);

        l = importRegex.test(l)
          ? l.replace(importRegex, `from '@yondav/utils/${methodType}';`)
          : l;

        return l;
      };

      // wrap code into markdown code tags
      streamData = `${preCode}\r${data.split('\n').map(transform).join('\n')}\`\`\`\r`;
    }

    writeStream.write(streamData);
    writeStream.end();

    console.log(`${name} ${existingFile ? 'updated' : 'created'}`);
  });
}

function createDirIfNeeded(dir: string): void {
  if (!fs.existsSync(path.resolve(dir))) fs.mkdirSync(dir);
}

function isDir(pathName: string): boolean {
  return fs.lstatSync(pathName).isDirectory();
}

function isDemoFile(filename: string): boolean {
  const demoRegex = /^use[A-Z][a-zA-Z]*.demo.tsx$/;
  return demoRegex.test(filename);
}

function camelToKebabCase(str: string): string {
  return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toQueryParams = (params: Record<string, any>): string => {
  const paramsAsString = Object.entries(params)
    .filter(([ _, value ]) => !!value)
    .map(([ key, value ]) => `${key}=${value}`)
    .join('&');
  return `?${paramsAsString}`;
};

export {
  // isHookFile,
  copyFile,
  createDirIfNeeded,
  methods,
  isDir,
  isDemoFile,
  camelToKebabCase,
  toQueryParams,
};
