import { getRandomNumber } from '../randomizer.js';
import { numberOfRounds, gameLogic } from '../index.js';

const getArithmeticProgression = (start, step, length) => {
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
    const progressionStart = getRandomNumber(5, 10);
    const progressionStep = getRandomNumber(3, 9);
    const progressionLength = getRandomNumber(5, 10);
    // eslint-disable-next-line max-len
    const progression = getArithmeticProgression(progressionStart, progressionStep, progressionLength);
    const hiddenIndex = getRandomNumber(0, progression.length - 1);
    const expectedAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    const modifiedProgression = progression.join(' ');
    const question = `Question: ${modifiedProgression}`;
    gameData.push([question, String(expectedAnswer)]);
  }
  return gameData;
};

export default () => gameLogic(task, getGameData());
