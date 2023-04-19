import Dir from '../dir/dir.js';

export default interface File extends Dir {

  data : string;
  file : string;
  path : string;
}