import * as fs from 'fs';
import * as path from 'path';
import parsFunc from './parsers.js';

const takeObjectFromJson = (file) => {
  const filePath = path.isAbsolute(file) ? file : path.resolve(process.cwd(), file);
  const read = fs.readFileSync(`${filePath}`, 'utf8');
  const readJson = parsFunc(read, filePath);
  return readJson;
};
export default takeObjectFromJson;
