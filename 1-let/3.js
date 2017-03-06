// 3.暂时性死区
var a = 2
{
    a = 3
    let a
    console.log(a);
}
