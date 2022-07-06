import JsonRead from '../../json-read.js';
import Dir from '../dir.js';
import {promise} from 'glob-promise.js';

export default async function Dirs (root : string, globPaths : string[]) : Promise<Dir[]> {

    const directories : string[]= [];

    for(const folder of globPaths) {

        const path = root + `/${folder}`;
        const matches = await promise(path);
        directories.push(...matches);
    }

    return directories.map(dir=>{

        const data = JsonRead(dir + '/package.json');
        const name = data.name;
        const version = data.version;

        return  {
            name,
            version,
            dir: dir,
        };
    });

}


