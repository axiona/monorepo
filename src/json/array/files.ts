import Json from '../json';
import JsonRead from '../../json-read';
import Dir from '../../dir/dir';

export default function Files (file : string, paths : Dir[]) : Json[] {

  return paths.map(dir=>{

      const path = dir.dir + `/${file}`;
      const object = JsonRead(path);

      return Object.assign({file, path, object}, dir);

  });
}


