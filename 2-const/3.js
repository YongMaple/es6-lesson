// 3.冻结
// 'use strict';

const a = {
    name : 'JiaYongfeng'
}
Object.freeze(a);
a.name = 'YongMaple'    //Cannot assign to read only property 'name' of object '#<Object>'
a.email = 'jyfmaple@gmail.com'
console.log(a);
