import getRandomNumber from '../randomizer.js';
import { numberOfRounds, getGameLogic } from '../index.js';

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return 'Не указан оператор';
  }
};

const task = 'What is the result of the expression?';
const getGameData = () => {
  const gameData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const randomNum1 = getRandomNumber(1, 10);
    const randomNum2 = getRandomNumber(1, 10);
    const operators = ['+', '-', '*'];
    const operator = operators[getRandomNumber(0, operators.length - 1)];
    const question = `${randomNum1} ${operator} ${randomNum2}`;
    const expectedAnswer = calculate(randomNum1, randomNum2, operator);
    gameData.push([question, String(expectedAnswer)]);
  }
  return gameData;
};
export default () => getGameLogic(task, getGameData());
