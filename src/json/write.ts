import JsonWrite from '../json-write';
import Json from './json';

export default function Write(path : Json) : Json {

    JsonWrite(path.path, path.object);

    return path;

}