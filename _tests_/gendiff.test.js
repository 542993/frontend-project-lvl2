import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';
import * as fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '_fixtures_', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('Gendiff for json files', () => {
  expect(genDiff('file1.json', 'file2.json')).toBe(readFile('result'));
});

test('Gendiff for yml files', () => {
  expect(genDiff('filepath1.yml', 'filepath2.yml')).toBe(readFile('result'));
});
