// ES5
function asyncFun(a, b, cb) {
   setTimeout(function () {
       console.log(a+b);
       cb(a + b);
   }, 200);
}

asyncFun(1, 2, function (result) {
   if (result > 2) {
       asyncFun(result, 2, function (result) {
           if (result > 4) {
               asyncFun(result, 2, function (result) {
                   console.log('ok');
               });
           }
       });
   }
});
