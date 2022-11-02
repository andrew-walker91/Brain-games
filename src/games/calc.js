import { getRandomNumber, getRandomOperator } from '../randomizer.js';
import { numberOfRounds, gameLogic } from '../index.js';

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return 0;
  }
};

const task = 'What is the result of the expression?';
const getGameData = () => {
  const gameData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const firstNum = getRandomNumber(1, 10);
    const secondNum = getRandomNumber(1, 10);
    const operator = getRandomOperator();
    const question = `Question: ${firstNum} ${operator} ${secondNum}`;
    const expectedAnswer = calculate(firstNum, secondNum, operator);
    gameData.push([question, String(expectedAnswer)]);
  }
  return gameData;
};
export default () => gameLogic(task, getGameData());
