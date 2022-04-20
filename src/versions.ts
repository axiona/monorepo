import Dir from './dir/dir';
import JsonRead from './json-read';

export default function Versions(paths: Dir[]) : (Dir & { version : string })[] {

  const result : (Dir & { version : string })[] = [];

  for(let path of paths) {

    const version = JsonRead(path.dir).version;

    result.push(Object.assign({version}, path));

  }

  return result;
}






