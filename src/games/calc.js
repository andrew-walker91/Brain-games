import getRandomNumber from '../randomizer.js';
import getGameLogic from '../index.js';

const task = 'What is the result of the expression?';
const gameOperators = ['+', '-', '*'];
const minNumber = 0;
const maxNumber = 10;

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error('Operator not specified');
  }
};

const getGameRound = () => {
  const gameNum1 = getRandomNumber(minNumber, maxNumber);
  const gameNum2 = getRandomNumber(minNumber, maxNumber);
  const gameOperator = gameOperators[getRandomNumber(0, gameOperators.length - 1)];
  const question = `${gameNum1} ${gameOperator} ${gameNum2}`;
  const expectedAnswer = calculate(gameNum1, gameNum2, gameOperator);

  return [question, String(expectedAnswer)];
};
export default () => getGameLogic(task, getGameRound);
