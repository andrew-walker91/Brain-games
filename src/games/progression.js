import getRandomNumber from '../randomizer.js';
import { numberOfRounds, getGameLogic } from '../index.js';

const getArithmeticProg = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + (i * step));
  }
  return result;
};

const task = 'What number is missing in the progression?';
const getGameData = () => {
  const gameData = [];
  for (let i = 0; i < numberOfRounds; i += 1) {
    const randomStartPointOfProg = getRandomNumber(5, 10);
    const randomStepOfProg = getRandomNumber(3, 9);
    const randomProgLength = getRandomNumber(5, 10);
    const prog = getArithmeticProg(randomStartPointOfProg, randomStepOfProg, randomProgLength);
    const randomHiddenIndexOfProg = getRandomNumber(0, prog.length - 1);
    const expectedAnswer = prog[randomHiddenIndexOfProg];
    prog[randomHiddenIndexOfProg] = '..';
    const modifiedProgression = prog.join(' ');
    const question = `${modifiedProgression}`;
    gameData.push([question, String(expectedAnswer)]);
  }
  return gameData;
};

export default () => getGameLogic(task, getGameData());
