import DeepMerge from 'deepmerge';
import File from './file/file';
import UniqueParameters from '@alirya/array/unique-parameters';


/**
 * merge main to package, replacing all package
 *
 * @param main
 * @param packages
 */
export default function MergeRight(main : object, packages : File[]) : File[] {

  for(const match of packages) {

      match.data = DeepMerge(match.data, main, {
          arrayMerge:(target, source)=>UniqueParameters([...target, ...source])
      });
  }

  return packages;
}



