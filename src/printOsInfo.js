import os from 'os';

export const printOsInfo = (input) => {
  const regex = /\--(.*)/;
  const commandArray = input.split(' ');

  try {
    switch (commandArray[1].match(regex)[1]) {
      case 'EOL':
        console.log(os.EOL);
        break;
      case 'cpus':
        console.log(
          `overall amount of CPUS = ${os.cpus().length}\n`,
          os.cpus().map((cpu) => {
            return {
              model: cpu.model,
              speed: `${cpu.speed / 1000} GHz`,
            };
          })
        );
        break;
      case 'homedir':
        console.log(os.homedir());
        break;
      case 'username':
        console.log(os.userInfo().username);
        break;
      case 'architecture':
        console.log(os.arch());
        break;
      default:
        console.log('Invalid input');
    }
  } catch {
    console.log('Operation failed');
  }
};
