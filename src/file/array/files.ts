import JsonRead from '../../json-read';
import Dir from '../../dir/dir';
import File from '../file';

export default function Files (file : string, paths : Dir[]) : File[] {

  return paths.map(dir=>{

      const path = dir.dir + `/${file}`;
      const data = JsonRead(path);

      return Object.assign({data, path, file}, dir);

  });
}


