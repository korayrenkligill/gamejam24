export const splitIntoThree = <T>(array: T[]): T[][] => {
  const length = array.length;
  const partSize = Math.ceil(length / 3);
  const parts: T[][] = [];

  for (let i = 0; i < length; i += partSize) {
    parts.push(array.slice(i, i + partSize));
  }

  return parts;
};

export const splitIntoTwo = <T>(array: T[]): T[][] => {
  const length = array.length;
  const mid = Math.ceil(length / 2);
  return [array.slice(0, mid), array.slice(mid)];
};
