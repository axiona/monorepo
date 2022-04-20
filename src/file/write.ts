import JsonWrite from '../json-write';
import File from './file';

export default function Write(path : File) : File {

    JsonWrite(path.path, path.data);
    return path;

}