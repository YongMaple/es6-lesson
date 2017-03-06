for (let elem of ['a', 'b'].values()) {             //./node_modules/.bin/babel-node ./10-Array/12.js
  console.log(elem);                                //语法正确，但是目前node不支持，需要babel转成ES5
}
// 'a'
// 'b'
