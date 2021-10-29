import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';
import * as fs from 'fs';
import takeObjectFromJson from '../bin/funcs.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('type file', () => {
  const res = readFile('file1.json');
  expect(typeof res).toEqual('string');
});

test('type of result', () => {
  const obj = takeObjectFromJson('file1.json');
  expect(typeof obj).toEqual('object');
});
