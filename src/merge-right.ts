import DeepMerge from 'deepmerge';
import {UniqueParameters} from '@alirya/array/unique';
import Json from './json/json';
import Sort from './object/sort';


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



