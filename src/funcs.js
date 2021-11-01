import * as fs from 'fs';
import * as path from 'path';
import _ from 'lodash';
import parsFunc from './parsers.js';

export const readFile = (pathToFile) => {
  const fullFilePath = path.resolve(process.cwd(), '_fixtures_', pathToFile);
  const read = fs.readFileSync(fullFilePath, 'utf8');
  const data = parsFunc(read, fullFilePath);
  return data;
};

export const genDiff = (filePath1, filePath2) => {
  const data1 = readFile(filePath1);
  const data2 = readFile(filePath2);
  const data1keys = Object.keys(data1);
  const data2keys = Object.keys(data2);
  const sortAllkeys = _.uniq(data1keys.concat(data2keys).sort());
  const diff = sortAllkeys.reduce((acc, key) => {
    if (_.has(data1, key) && _.has(data2, key)) {
      if (data1[key] === data2[key]) {
        return `${acc}    ${key}: ${data1[key]}\n`;
      }
      return `${acc}  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}\n`;
    }
    if (_.has(data1, key) && !_.has(data2, key)) {
      return `${acc}  - ${key}: ${data1[key]}\n`;
    }
    if (!_.has(data1, key) && _.has(data2, key)) {
      return `${acc}  + ${key}: ${data2[key]}\n`;
    }
    return acc;
  }, '');
  return `{\n${diff}}`;
};
