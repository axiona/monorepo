import File from '../file/file';

export default interface Json extends Omit<File, 'data'> {

  object : object;
}