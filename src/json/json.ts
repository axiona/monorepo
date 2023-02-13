import File from '../file/file.js';

export default interface Json extends Omit<File, 'data'> {

  object : object;
}