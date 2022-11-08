import getRandomNumber from '../randomizer.js';
import getGameLogic from '../index.js';

const task = 'What number is missing in the progression?';
const progLength = 10;
const minNumber = 1;
const maxNumber = 10;
const minStepNumber = 3;
const maxStepNumber = 19;

const getArithmeticProg = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + (i * step));
  }

  return result;
};

const getGameRound = () => {
  const progStart = getRandomNumber(minNumber, maxNumber);
  const progStep = getRandomNumber(minStepNumber, maxStepNumber);
  const prog = getArithmeticProg(progStart, progStep, progLength);
  const progHiddenIndex = getRandomNumber(minNumber, prog.length - 1);
  const expectedAnswer = prog[progHiddenIndex];
  prog[progHiddenIndex] = '..';
  const modifiedProg = prog.join(' ');
  const question = `${modifiedProg}`;

  return [question, String(expectedAnswer)];
};

export default () => getGameLogic(task, getGameRound);
