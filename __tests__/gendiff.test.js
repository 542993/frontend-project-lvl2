import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';
import * as fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('json-stylish', () => {
  expect(genDiff('file1.json', 'file2.json', 'stylish')).toBe(readFile('result-stylish'));
});

test('yml-stylish', () => {
  expect(genDiff('filepath1.yml', 'filepath2.yml', 'stylish')).toBe(readFile('result-stylish'));
});
test('json-plain', () => {
  expect(genDiff('file1.json', 'file2.json', 'plain')).toBe(readFile('result-plain'));
});

test('yml-plain', () => {
  expect(genDiff('filepath1.yml', 'filepath2.yml', 'plain')).toBe(readFile('result-plain'));
});

test('json-json', () => {
  expect(genDiff('file1.json', 'file2.json', 'json')).toBe(readFile('result-json'));
});

test('yml-json', () => {
  expect(genDiff('filepath1.yml', 'filepath2.yml', 'json')).toBe(readFile('result-json'));
});
