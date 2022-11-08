import getRandomNumber from '../randomizer.js';
import getGameLogic from '../index.js';

const task = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 50;

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
  const gameNum1 = getRandomNumber(minNumber, maxNumber);
  const gameNum2 = getRandomNumber(minNumber, maxNumber);
  const question = `${gameNum1} ${gameNum2}`;
  const expectedAnswer = getGreatestCommonDivisor(gameNum1, gameNum2);

  return [question, String(expectedAnswer)];
};

export default () => getGameLogic(task, getGameRound);
