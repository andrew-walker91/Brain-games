import getRandomNumber from '../randomizer.js';
import getGameLogic from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (randomNumForGame) => randomNumForGame % 2 === 0;

const getGameRound = () => {
  const question = getRandomNumber(1, 100);
  const expectedAnswer = isEven(question) ? 'yes' : 'no';
  return [question, expectedAnswer];
};

export default () => getGameLogic(task, getGameRound);
