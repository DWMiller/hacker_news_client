import { number, string, bool } from 'prop-types';

export const storyType = {
  id: number.isRequired,
  by: string.isRequired,
  score: number.isRequired,
  title: string.isRequired,
  url: string,
  time: number.isRequired,
  type: string.isRequired,
};

// Some fields not required as they are removed on deleted comments
export const commentType = {
  deleted: bool,
  id: number.isRequired,
  by: string,
  text: string,
  time: number.isRequired,
  type: string.isRequired,
};
