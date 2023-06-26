import fs from 'fs';
import path from 'path';
import readline from 'readline';
import os from 'os';
import { fileURLToPath } from 'url';
import { sayGoodbye } from './sayGoodbye.js';
import { getUserName } from './getUserName.js';
import { getCommandFromUserInput } from './helpers/getCommandFromUserInput.js';
import { printOsInfo } from './printOsInfo.js';
import { list } from './list.js';

const homeDirPath = os.homedir();

const processUserInput = (input, currentPath) => {
  const command = getCommandFromUserInput(input);
  switch (command) {
    case '.exit':
      sayGoodbye();
      break;
    case 'os':
      printOsInfo(input);
      break;
    case 'ls':
      list(currentPath);
      break;
    default:
      console.log('Invalid input');
  }
};

const copy = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
  });

  let currentPath = homeDirPath;

  console.log(`Welcome to the File Manager, ${getUserName()}!`);
  console.log(`You are currently in ${currentPath}`);
  rl.on('line', (input) => {
    processUserInput(input, currentPath);
    console.log(`You are currently in ${currentPath}`);
  });

  process.on('SIGINT', function () {
    sayGoodbye();
  });
};

await copy();
