#!/usr/bin/env node
import userName from '../src/cli.js';
import gameIsEven from './brain-even.js';

console.log(`Hello, ${userName}!`);

gameIsEven();
