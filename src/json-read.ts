import * as fs from 'fs';
import Sort from './object/sort.js';


export default function JsonRead(path : string) {

  try {

    return Sort(JSON.parse(fs.readFileSync(path).toString()));

  } catch (e) {

    console.error(`unable to parse ${path}`);
    throw e;
  }
}

