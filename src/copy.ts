import {copyFile} from 'fs';
import File from './file/file.js';

export default function Copy(source : string, destinations : File[]) {

    for (const destination of destinations) {

        copyFile(source, destination.path, function(error) {

            if(error) {

                console.error(error);
            }
        });

    }
}


