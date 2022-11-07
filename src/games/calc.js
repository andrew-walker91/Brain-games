import getRandomNumber from '../randomizer.js';
import getGameLogic from '../index.js';

const task = 'What is the result of the expression?';

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
  const gameNum1 = getRandomNumber(1, 10);
  const gameNum2 = getRandomNumber(1, 10);
  const gameOperators = ['+', '-', '*'];
  const gameOperator = gameOperators[getRandomNumber(0, gameOperators.length - 1)];
  const question = `${gameNum1} ${gameOperator} ${gameNum2}`;
  const expectedAnswer = calculate(gameNum1, gameNum2, gameOperator);
  return [question, String(expectedAnswer)];
};
export default () => getGameLogic(task, getGameRound);
