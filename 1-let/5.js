//例子
var arr = [];
// var arr = [function() {console.log(i);},function() {console.log(i);}...]
function f() {
    for (var i = 0; i < 5; i++) {
        arr.push(function() {
            console.log(i);
        })
    }
}
f();
arr[3]()


// for (let i = 0; i < 3; i++) {
//   let i = 'abc';
//   console.log(i);
// }
