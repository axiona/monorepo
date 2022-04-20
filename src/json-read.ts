import * as fs from 'fs';


export default function JsonRead(path : string) {

  try {

    return JSON.parse(fs.readFileSync(path).toString());

  } catch (e) {

    console.error(`unable to parse ${path}`);
    throw e;
  }
}

