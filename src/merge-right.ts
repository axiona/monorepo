import DeepMerge from 'deepmerge';
import {UniqueParameters} from '@alirya/array/unique.js';
import Json from './json/json.js';
import Sort from './object/sort.js';


/**
 * merge main to package, replacing all package
 *
 * @param main
 * @param packages
 */
export default function MergeRight(main : object, packages : Json[]) : Json[] {

  for(const match of packages) {

      match.object = Sort(DeepMerge(match.object, main, {
          arrayMerge:(target, source)=>UniqueParameters([...target, ...source])
      }));
  }

  return packages;
}



