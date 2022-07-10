import Dir from '../dir';
import {promise} from 'glob-promise';
import PackageJson from '../package-json';

export default async function Dirs (root : string, globPaths : string[]) : Promise<Dir[]> {

    const directories : string[]= [];

    for(const folder of globPaths) {

        const path = root + `/${folder}`;
        const matches = await promise(path);
        directories.push(...matches);
    }

    return directories.map(PackageJson);

}


