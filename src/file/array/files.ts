import Dir from '../../dir/dir.js';
import File from '../file.js';
import fs from 'fs';

export default function Files (file : string, paths : Dir[]) : File[] {

  return paths.map(dir=>{

      const path = dir.dir + `/${file}`;
      const data = fs.readFileSync(path).toString();

      return Object.assign({data, path, file}, dir);

  });
}


