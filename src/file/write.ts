import File from './file.js';
import {writeFileSync} from 'fs';

export default function Write(path : File) : File {

    writeFileSync(path.path, path.data, {encoding:'utf8'});

    return path;

}