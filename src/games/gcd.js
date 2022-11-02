import { getRandomNumber } from '../randomizer.js';
import { numberOfRounds, gameLogic } from '../index.js';

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
  return String(x + y);
};

const task = 'Find the greatest common divisor of given numbers.';
const getGameData = () => {
  const gameData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstNum = getRandomNumber(1, 50);
    const secondNum = getRandomNumber(1, 50);
    const question = `${firstNum} ${secondNum}`;
    const expectedAnswer = getGreatestCommonDivisor(firstNum, secondNum);
    gameData.push([question, String(expectedAnswer)]);
  }
  return gameData;
};

export default () => gameLogic(task, getGameData());
