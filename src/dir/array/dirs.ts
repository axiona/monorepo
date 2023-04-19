import Dir from '../dir.js';
import {promise} from 'glob-promise.js';
import PackageJson from '../package-json.js';

export default async function Dirs (root : string, globPaths : string[]) : Promise<Dir[]> {

    const directories : string[]= [];

    for(const folder of globPaths) {

        const path = root + `/${folder}`;
        const matches = await promise(path);
        directories.push(...matches);
    }

    return directories.map(PackageJson);

}


