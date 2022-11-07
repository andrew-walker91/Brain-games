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
    const progStart = getRandomNumber(5, 10);
    const progStep = getRandomNumber(3, 9);
    const progLength = getRandomNumber(5, 10);
    const prog = getArithmeticProg(progStart, progStep, progLength);
    const progHiddenIndex = getRandomNumber(0, prog.length - 1);
    const expectedAnswer = prog[progHiddenIndex];
    prog[progHiddenIndex] = '..';
    const modifiedProg = prog.join(' ');
    const question = `${modifiedProg}`;
    gameData.push([question, String(expectedAnswer)]);
  }
  return gameData;
};

export default () => getGameLogic(task, getGameData());
