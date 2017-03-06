const exec = require('child_process').exec;
var fs = require('fs-extra')

let directory = fs.readJsonSync('./directory.json')
let index = fs.readJsonSync('./index.json')
let cataIndex = index.fileIndex == 0 ? index.cataIndex - 1 : index.cataIndex
let fileIndex = index.fileIndex == 0 ? directory[cataIndex].amount - 1 : index.fileIndex - 1

let command = `node ./${directory[cataIndex].name}/${fileIndex+1}.js`

exec(command, (error, stdout, stderr) => {
    if((fileIndex+1) < directory[cataIndex].amount){
        fileIndex++
    }else{
        fileIndex = 0
        cataIndex++
    }
  if (error) {
    console.error(error);
    return;
  }
  console.log(stdout);
  console.log(`${stderr||''}`);
});
