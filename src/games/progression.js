import getRandomNumber from '../randomizer.js';
import getGameLogic from '../index.js';

const task = 'What number is missing in the progression?';

const getArithmeticProg = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + (i * step));
  }
  return result;
};

const getGameRound = () => {
  const progStart = getRandomNumber(5, 10);
  const progStep = getRandomNumber(3, 9);
  const progLength = getRandomNumber(5, 10);
  const prog = getArithmeticProg(progStart, progStep, progLength);
  const progHiddenIndex = getRandomNumber(0, prog.length - 1);
  const expectedAnswer = prog[progHiddenIndex];
  prog[progHiddenIndex] = '..';
  const modifiedProg = prog.join(' ');
  const question = `${modifiedProg}`;
  return [question, String(expectedAnswer)];
};

export default () => getGameLogic(task, getGameRound);
