const parseFrame = frameString => {
  let [fst, snd] = frameString;

  if (fst === 'X') return { baseScore: 10, rolls: [10], isStrike: true, isSpare: false };

  fst = parseInt(fst);
  if (snd === '-') return { baseScore: fst, rolls: [fst, 0], isStrike: false, isSpare: false };
  if (snd === '/') return { baseScore: 10, rolls: [fst, 10 - fst], isStrike: false, isSpare: true };

  snd = parseInt(snd);
  return { baseScore: fst + snd, rolls: [fst, snd], isStrike: false, isSpare: false };
};

const parseFrames = resultString => resultString.split(' ').map(parseFrame);

const scoreGame = resultString => {
  const frames = parseFrames(resultString);

  let score = 0;

  // We need an array of all rolls to look ahead
  // Messy - would use lodash / arr.flatMap
  let allRolls = [];
  frames.forEach(({ rolls }) => rolls.forEach(roll => allRolls.push(roll)));

  let rollIndex = 0;
  frames.slice(0, 10).forEach((frame, i) => {
    if (frame.isStrike) {
      score += frame.baseScore + allRolls[rollIndex + 1] + allRolls[rollIndex + 2];
      rollIndex += 1;
      return;
    }
    if (frame.isSpare) {
      score += frame.baseScore + allRolls[rollIndex + 2];
      rollIndex += 2;
      return;
    }
    score += frame.baseScore;
    rollIndex += 2;
  });

  return score;
};

module.exports = {
  parseFrame,
  parseFrames,
  scoreGame,
};
