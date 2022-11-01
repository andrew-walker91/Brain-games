#!/usr/bin/env node
import userName from '../src/cli.js';
import brainEven from '../src/games/even.js';

console.log(`Hello, ${userName}!`);

brainEven();
