const fs = require('fs').promises
const directories = require('./makeNodeApp')

const directoriesTab = directories.directories

for (const element of directoriesTab) {
    fs.rmdir(element, { recursive: true })
  .then(() => console.log('directory removed!'));
}

