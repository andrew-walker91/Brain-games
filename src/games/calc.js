import getRandomNumber from '../randomizer.js';
import { numberOfRounds, getGameLogic } from '../index.js';

const Calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Calculate('Не указан оператор');
  }
};

const task = 'What is the result of the expression?';
const getGameData = () => {
  const gameData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const gameNum1 = getRandomNumber(1, 10);
    const gameNum2 = getRandomNumber(1, 10);
    const gameOperators = ['+', '-', '*'];
    const gameOperator = gameOperators[getRandomNumber(0, gameOperators.length - 1)];
    const question = `${gameNum1} ${gameOperator} ${gameNum2}`;
    const expectedAnswer = Calculate(gameNum1, gameNum2, gameOperator);
    gameData.push([question, String(expectedAnswer)]);
  }
  return gameData;
};
export default () => getGameLogic(task, getGameData());
