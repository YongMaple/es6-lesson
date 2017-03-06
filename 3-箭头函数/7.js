// 4.不支持arguments
// var fn = function(){
//     for (let arg of arguments) {
//         console.log(arg);
//     }
// }
var fn = () => {
    for (let arg of arguments) {
        console.log(arg);
    }
}
fn('haha','jia','jimmy')
