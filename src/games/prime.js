import getRandomNumber from '../randomizer.js';
import { numberOfRounds, getGameLogic } from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getGameData = () => {
  const gameData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const gameNum = getRandomNumber(1, 200);
    const question = `${gameNum}`;
    const expectedAnswer = isPrime(gameNum) ? 'yes' : 'no';
    gameData.push([question, expectedAnswer]);
  }
  return gameData;
};

export default () => getGameLogic(task, getGameData());
