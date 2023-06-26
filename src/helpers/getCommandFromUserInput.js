export const getCommandFromUserInput = (input) => {
  const inputArray = input.split(' ');
  const command = inputArray[0];

  return command;
};
