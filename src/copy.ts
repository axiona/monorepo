import fs from 'fs';
import Dir from './dir/dir';
import File from './file/file';

export default function Copy(source : string, destinations : File[]) {

    for (const destination of destinations) {

        fs.copyFile(source, destination.path, function(error) {

            if(error) {

                console.error(error);
            }
        });

    }
}


