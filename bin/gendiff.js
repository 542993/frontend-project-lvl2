#!/usr/bin/env node

import { Command } from 'commander';
import _ from 'lodash';
import * as path from 'path';
import * as fs from 'fs';

const program = new Command();
program
  .description('Compares two configuration files and shows a difference')
  .version('0.0.1', '-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const takeObjectFromJson = (file) => {
      const filePath = path.isAbsolute(file) ? process.cwd : path.resolve(file);
      const read = fs.readFileSync(filePath, 'utf8');
      const readJson = JSON.parse(read);
      return readJson;
    };
    const json1 = takeObjectFromJson(filepath1);
    const json2 = takeObjectFromJson(filepath2);
    const arr1 = Object.keys(json1);
    const arr2 = Object.keys(json2);
    const commonArr = _.uniq(arr1.concat(arr2).sort());
    commonArr.forEach((item) => {
      if (arr2.includes(item)) {
        if (json1[item] === json2[item]) {
          console.log(`${item}: ${json1[item]}`);
        } else {
          const a = json1[item] ? ` -${item}: ${json1[item]}\n +${item}: ${json2[item]}` : `+ ${item}: ${json2[item]}`;
          console.log(a);
        }
      } else {
        console.log(`-${item}: ${json1[item]}`);
      }
    });
  });

program.parse();
