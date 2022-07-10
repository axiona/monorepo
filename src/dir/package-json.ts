import Dir from './dir';
import JsonRead from '../json-read';

export default function PackageJson(dir: string) : Dir {

  const data = JsonRead(dir + '/package.json');
  const name = data.name;
  const version = data.version;

  return {name, version, dir};
}