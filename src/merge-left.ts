import DeepMerge from 'deepmerge';
import {UniqueParameters} from '@alirya/array/unique';
import Json from './json/json';
import Sort from './object/sort';

/**
 * merge package to main, replacing all main
 *
 * @param main
 * @param packages
 */
export default function MergeLeft(main : object, packages : Json[]) : Json[] {

  for(const match of packages) {

    match.object = Sort(DeepMerge(main, match.object, {
      arrayMerge:(target, source)=>UniqueParameters([...target, ...source])
    }));
  }

  return packages;
}



