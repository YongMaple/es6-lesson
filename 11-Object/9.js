// 例子
var obj = {
    one(){
        console.log('one1');
    },
    two(){
        console.log('two2');
    },
    three(){
        console.log('three3');
    }
}
for (let k in obj) {
    console.log(k);
    console.log(obj[k].name);
}
