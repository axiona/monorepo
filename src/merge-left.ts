import DeepMerge from 'deepmerge';
import UniqueParameters from '@alirya/array/unique-parameters';
import Json from './json/json';

/**
 * merge package to main, replacing all main
 *
 * @param main
 * @param packages
 */
export default function MergeLeft(main : object, packages : Json[]) : Json[] {

  for(const match of packages) {

    match.object = (DeepMerge(main, match.object, {
      arrayMerge:(target, source)=>UniqueParameters([...target, ...source])
    }));
  }

  return packages;
}



