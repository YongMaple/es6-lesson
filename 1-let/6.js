//ES5中的解决方案
var arr = [];
function f() {
    for (var i = 0; i < 5; i++) {
        arr.push((function(i) {
            return function() {
                console.log(i);
            }
        })(i));
    }
}
f();
arr[3]()
