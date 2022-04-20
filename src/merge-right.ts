import DeepMerge from 'deepmerge';
import UniqueParameters from '@alirya/array/unique-parameters';
import Json from './json/json';


/**
 * merge main to package, replacing all package
 *
 * @param main
 * @param packages
 */
export default function MergeRight(main : object, packages : Json[]) : Json[] {

  for(const match of packages) {

      match.object = DeepMerge(match.object, main, {
          arrayMerge:(target, source)=>UniqueParameters([...target, ...source])
      });
  }

  return packages;
}



