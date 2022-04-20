import DeepMerge from 'deepmerge';
import File from './file/file';
import UniqueParameters from '@alirya/array/unique-parameters';

/**
 * merge package to main, replacing all main
 *
 * @param main
 * @param packages
 */
export default function MergeLeft(main : object, packages : File[]) : File[] {

  for(const match of packages) {

    match.data = (DeepMerge(main, match.data, {
      arrayMerge:(target, source)=>UniqueParameters([...target, ...source])
    }));
  }

  return packages;
}



