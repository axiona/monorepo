import Dir from '../dir/dir';

export default interface File extends Dir {

  data : object;
  file : string;
  path : string;
}