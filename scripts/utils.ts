import fs, { existsSync } from 'fs';
import path from 'path';

type UtilDir = { [ key in 'methods' ]: string }
interface UtilDirs {
  string: UtilDir
}

const utils: UtilDirs = {
  string: {
    methods: path.resolve('./src', 'string', 'methods')
  }
};

function log(message: string) {
  // eslint-disable-next-line no-console
  console.log(message);
}

function getFileName(pathname: string): string {
  return pathname.split('/').reverse()[0];
}

function checkFileExists(pathName: string) {
  if (!existsSync(pathName)) {
    throw new Error(`${getFileName(pathName)} doesn't exist`);
  }
}

interface CopyFileProps {
  source: string
  dest: string
  toMarkdown: boolean
  type: 'string'
}

function copyFile({
  source, dest, toMarkdown, type
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

  // Read source then create markdown source file
  fs.readFile(source, 'utf8', (err, data) => {
    if (err) {
      console.error(`Cannot read ${source}`);
      return;
    }

    const name = getFileName(dest);
    const extension = source.split('.').reverse()[0];
    const writeStream = fs.createWriteStream(dest);

    const preCode = `\`\`\`${extension}`;

    let streamData = data;

    if (toMarkdown) {
      // rename import from "from '..'" to "from '@yondav/utils'"
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

      // wrap code into markdown code tags
      streamData = `${preCode}\r${data.split('\n').map(transform).join('\n')}\`\`\`\r`;
    }

    writeStream.write(streamData);
    writeStream.end();

    log(`${name} ${existingFile ? 'updated' : 'created'}`);
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

export type { UtilDir, UtilDirs };
export {
  camelToKebabCase,
  checkFileExists,
  copyFile,
  createDirIfNeeded,
  getFileName,
  isDemoFile,
  isDir,
  log,
  toQueryParams,
  utils,
};
