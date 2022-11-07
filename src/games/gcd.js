import getRandomNumber from '../randomizer.js';
import getGameLogic from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  let x = firstNumber;
  let y = secondNumber;

  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  return x + y;
};

const getGameRound = () => {
  const gameNum1 = getRandomNumber(1, 50);
  const gameNum2 = getRandomNumber(1, 50);
  const question = `${gameNum1} ${gameNum2}`;
  const expectedAnswer = getGreatestCommonDivisor(gameNum1, gameNum2);
  return [question, String(expectedAnswer)];
};

export default () => getGameLogic(task, getGameRound);
