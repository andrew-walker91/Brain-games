import getRandomNumber from '../randomizer.js';
import { numberOfRounds, getGameLogic } from '../index.js';

const isEven = (randomNumForGame) => randomNumForGame % 2 === 0;
const task = 'Answer "yes" if the number is even, otherwise answer "no".';
const getGameData = () => {
  const gameData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const randomNumForGame = getRandomNumber(1, 100);
    const question = `${randomNumForGame}`;
    const expectedAnswer = isEven(randomNumForGame) ? 'yes' : 'no';
    gameData.push([question, expectedAnswer]);
  }
  return gameData;
};

export default () => getGameLogic(task, getGameData());
