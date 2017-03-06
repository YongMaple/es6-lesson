// 2.应用
// 函数调用
function f(v, w, x, y, z) {
    console.log(v, w, x, y, z);
}
var args = [0, 1];
f(-1, ...args, 2, ...[3]); //相当于f(-1,0,1,2,3)
