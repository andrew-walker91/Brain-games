import getRandomNumber from '../randomizer.js';
import { numberOfRounds, getGameLogic } from '../index.js';

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

const task = 'Find the greatest common divisor of given numbers.';
const getGameData = () => {
  const gameData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const gameNum1 = getRandomNumber(1, 50);
    const gameNum2 = getRandomNumber(1, 50);
    const question = `${gameNum1} ${gameNum2}`;
    const expectedAnswer = getGreatestCommonDivisor(gameNum1, gameNum2);
    gameData.push([question, String(expectedAnswer)]);
  }
  return gameData;
};

export default () => getGameLogic(task, getGameData());
