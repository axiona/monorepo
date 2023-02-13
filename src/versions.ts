import Json from './json/json.js';

export default function Versions(paths: Json[]) : (Json & { version : string })[] {

  const result : (Json & { version : string })[] = [];

  for(const path of paths) {

    const version = path.version;

    result.push(Object.assign({version}, path));

  }

  return result;
}






