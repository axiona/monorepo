import * as fs from 'fs';


export default function JsonWrite(path : string, data : object) {

  fs.writeFileSync(path, JSON.stringify(data, null, 2).trim(), {encoding:'utf8'});
}

