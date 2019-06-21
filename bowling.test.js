const { parseFrame, parseFrames, scoreGame } = require('./bowling');

const exampleFrames = {
  '9-': {
    baseScore: 9,
    rolls: [9, 0],
    isStrike: false,
    isSpare: false,
  },
  '9/': {
    baseScore: 10,
    rolls: [9, 1],
    isStrike: false,
    isSpare: true,
  },
  '81': {
    baseScore: 9,
    rolls: [8, 1],
    isStrike: false,
    isSpare: false,
  },
  X: {
    baseScore: 10,
    rolls: [10],
    isStrike: true,
    isSpare: false,
  },
};

test('parseFrame', () => {
  Object.keys(exampleFrames).forEach(k => expect(parseFrame(k)).toStrictEqual(exampleFrames[k]));
});

test('parseFrames', () => {
  const exampleInput = Object.keys(exampleFrames).join(' ');
  const expectedFrames = Object.keys(exampleFrames).map(k => exampleFrames[k]);
  expect(parseFrames(exampleInput)).toStrictEqual(expectedFrames);
});

test('scoreGame', () => {
  expect(scoreGame('81')).toBe(9);
  expect(scoreGame('9- 81')).toBe(9 + 8 + 1);
  expect(scoreGame('9/ 81')).toBe(10 + 8 + 8 + 1);
  expect(scoreGame('9- 81 9/ 2/ 12 X 9- 8- 9- 34')).toBe(96);
  expect(scoreGame('X X X X X X X X X X X X')).toBe(300);
  expect(scoreGame('5/ 4/ 3/ 2/ 1/ 5/ 5/ 5/ 5/ 5/ 5')).toBe(140);
  expect(scoreGame('5/ 12 5/ 12 5/ 12 5/ 12 5/ 12')).toBe(70);
});
