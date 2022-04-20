import Dir from '../dir/dir';

export default interface File extends Dir {

  data : string;
  file : string;
  path : string;
}