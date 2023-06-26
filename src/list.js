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

        Promise.all(arrayForTable).then((res) =>
          console.table(
            res.sort((a, b) => {
              if (a[1].toLowerCase() === b[1].toLowerCase()) {
                return a[0].toLowerCase() - b[0].toLowerCase();
              }
              return b[1].toLowerCase() - a[1].toLowerCase();
            })
          )
        );
      }
    })
    .catch(() => {
      console.log('Operation failed');
    });
};
