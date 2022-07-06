import JsonWrite from '../json-write.js';
import Json from './json.js';

export default function Write(path : Json) : Json {

    JsonWrite(path.path, path.object);

    return path;

}