export const initialItems = new Array(29999999).fill(0).map((_, i) => ({
  id: i,
  flag: i === 29999998,
}));
