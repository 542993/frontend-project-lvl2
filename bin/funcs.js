import * as fs from 'fs';
import * as path from 'path';
import _ from 'lodash';
import parsFunc from './parsers.js';

export const takeObjectFromJson = (file) => {
  const filePath = path.isAbsolute(file) ? file : path.resolve(process.cwd(), file);
  const read = fs.readFileSync(`${filePath}`, 'utf8');
  const readJson = parsFunc(read, filePath);
  return readJson;
};

export const compareObject = (filePath1, filePath2) => {
  const json1 = takeObjectFromJson(filePath1);
  const json2 = takeObjectFromJson(filePath2);
  const arr1 = Object.keys(json1);
  const arr2 = Object.keys(json2);
  const commonArr = _.uniq(arr1.concat(arr2).sort());
  const finishedArray = [];
  commonArr.map((item) => {
    if (arr2.includes(item)) {
      if (json1[item] === json2[item]) {
        finishedArray.push(`  ${item}: ${json1[item]}`);
      } else if (json1[item]) {
        finishedArray.push(`- ${item}: ${json1[item]}`);
        finishedArray.push(`+ ${item}: ${json2[item]}`);
      } else {
        finishedArray.push(`+ ${item}: ${json2[item]}`);
      }
    } else {
      finishedArray.push(`- ${item}: ${json1[item]}`);
    }
    return finishedArray;
  });
  return finishedArray;
};
