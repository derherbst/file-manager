import fs from 'fs/promises';

export const list = (path) => {
  fs.readdir(path)
    .then((res) => {
      if (res.length) {
        const arrayForTable = res.map(async (item) => {
          let type = '';
          await fs.lstat(`${path}/${item}`).then((res) => {
            if (res.isDirectory()) {
              type = 'directory';
            }
            if (res.isFile()) {
              type = 'file';
            }
          });
          return [item, type];
        });

        Promise.all(arrayForTable).then((res) => {
          const filterDirectory = [];
          var filterFile = [];
          res.forEach(function (value) {
            if (value[1] === 'directory') {
              filterDirectory.push(value);
            } else {
              filterFile.push(value);
            }
          });
          console.table([
            ...filterDirectory.sort((a, b) => a[0].localeCompare(b[0])),
            ...filterFile.sort((a, b) => a[0].localeCompare(b[0])),
          ]);
        });
      }
    })
    .catch(() => {
      console.log('Operation failed');
    });
};
