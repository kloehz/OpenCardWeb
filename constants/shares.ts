const prices = {
  1: 1.05,
  2: 0.58,
  3: 0.43,
  4: 0.36,
  5: 0.32,
  6: 0.28,
  7: 0.25,
  8: 0.22,
  9: 0.20,
  10: 0.19,
  12: 0.165
};

export const shares = {
  'normal': {
    'maxShares': 6,
    prices
  },
  'combustible': {
    'maxShares': 2,
    'prices': {
      ...prices,
      1: 1
    }
  },
  'supermercado': {
    'maxShares': 3,
    prices
  }
};
