import * as path from 'path';
import * as yaml from 'js-yaml';

const parsFunc = (file, filePath) => {
  const format = path.extname(filePath);
  let result;
  if (format === '.json') {
    result = JSON.parse(file);
  } else if (result === '.yml' || result === '.yaml') {
    result = yaml.load(file);
  }
  return result;
};
export default parsFunc;
