export const getUserName = () => {
  const regex = /--username=(,?.*)/gm;
  const usernameArgument = process.argv.slice(2)[0];

  return regex.exec(usernameArgument)[1];
};
