import Dir from '../../dir/dir';
import File from '../file';
import fs from 'fs';

export default function Files (file : string, paths : Dir[]) : File[] {

  return paths.map(dir=>{

      const path = dir.dir + `/${file}`;
      const data = JSON.parse(fs.readFileSync(path).toString());;

      return Object.assign({data, path, file}, dir);

  });
}


