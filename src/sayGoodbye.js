import { getUserName } from './getUserName.js';

export function sayGoodbye() {
  const username = getUserName();
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);

  process.exit();
}
