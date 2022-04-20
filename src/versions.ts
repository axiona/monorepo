import Json from './json/json';

export default function Versions(paths: Json[]) : (Json & { version : string })[] {

  const result : (Json & { version : string })[] = [];

  for(let path of paths) {

    const version = path.version;

    result.push(Object.assign({version}, path));

  }

  return result;
}






