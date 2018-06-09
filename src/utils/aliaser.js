import generateName from 'sillyname';

const index = {};

export const getAlias = name => {
  if (!index[name]) {
    index[name] = generateName();
  }

  return index[name];
};
