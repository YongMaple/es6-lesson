// 4.不允许重复声明
{
  let a = 10;
  var a = 1;
}

{
  let a = 10;
  let a = 1;
}

function fun(arg) {
  let arg;
}
