import Json from '../json.js';
import JsonRead from '../../json-read.js';
import Dir from '../../dir/dir.js';

export default function Files (file : string, paths : Dir[]) : Json[] {

  return paths.map(dir=>{

      const path = dir.dir + `/${file}`;
      const object = JsonRead(path);

      return Object.assign({file, path, object}, dir);

  });
}


