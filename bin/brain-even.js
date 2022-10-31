import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

const gameIsEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let rightAnswerCount = 0;
  while (rightAnswerCount < 3) {
    const randomNumber = Math.round(Math.random() * 100);
    // eslint-disable-next-line no-shadow
    const isEven = (randomNumber) => randomNumber % 2 === 0;
    const expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (expectedAnswer === userAnswer) {
      console.log('Correct!');
      rightAnswerCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${userName}!`);
      break;
    }
    if (rightAnswerCount === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
  }
};

export default gameIsEven;
