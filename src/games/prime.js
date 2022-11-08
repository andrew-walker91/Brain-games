import getRandomNumber from '../randomizer.js';
import getGameLogic from '../index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 1;
const maxNumber = 200;

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const getGameRound = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const expectedAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, expectedAnswer];
};

export default () => getGameLogic(task, getGameRound);
