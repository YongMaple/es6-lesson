// 1.基本使用
// let user = {name:'jiayongfeng',age:'28'}
// let st = new Set()
// st.add(user)        //添加
// st.delete(user)     //删除
// st.has(user)        //判断有无
// st.clear()          //清空
// console.log(st.size)    //查看数量
// for(let o of st){       //遍历
//     console.log(o)
// }

// 2.使用
// let arr =  ['jiayongfeng','jimmy','jimmy']
// let newArr = Array.from(new Set(arr))
// console.log(newArr)

//不能用于对象
// let set = new Set()
// set.add({name:'1'})
// console.log(set.size);
// set.add({name:'1'})
// console.log(set.size);

// let set = new Set();
// let a = NaN;
// let b = NaN;
// set.add(a);
// set.add(b);
// console.log(set.size);
