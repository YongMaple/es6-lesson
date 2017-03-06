const exec = require('child_process').exec;
const fs = require('fs-extra')

let directory = fs.readJsonSync('./directory.json')
let index = fs.readJsonSync('./index.json')
let cataIndex = index.cataIndex
let fileIndex = index.fileIndex

let command = `atom ./${directory[cataIndex].name}/${fileIndex+1}.js;node ./${directory[cataIndex].name}/${fileIndex+1}.js`

//特例，需要打开浏览器
if(cataIndex == 8 && fileIndex == 2){
    command = `atom /Users/jimmy/工作/同程/jyf-project/es6-lesson/9-for...of/3.html;open /Users/jimmy/工作/同程/jyf-project/es6-lesson/9-for...of/3.html`
}
if(cataIndex == 9 && fileIndex == 2){
    command = `atom /Users/jimmy/工作/同程/jyf-project/es6-lesson/10-Array/3.html;open /Users/jimmy/工作/同程/jyf-project/es6-lesson/10-Array/3.html`
}
exec(command, (error, stdout, stderr) => {
    if((fileIndex+1) < directory[cataIndex].amount){
        fileIndex++
    }else{
        fileIndex = 0
        cataIndex++
    }
    //将新的索引写入json文件
    fs.writeJson('./index.json', {"cataIndex": cataIndex,"fileIndex":fileIndex}, err => {
      if (err) return console.error(err)
    })
  if (error) {
    console.error(error);
    return;
  }
  console.log(stdout);
  console.log(`${stderr||''}`);
});
