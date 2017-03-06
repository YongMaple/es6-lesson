// 1.基本使用
let user = {name:'jiayongfeng',age:'28'}
let st = new Set()
st.add(user)        //添加
st.delete(user)     //删除
st.has(user)        //判断有无
st.clear()          //清空
console.log(st.size)    //查看数量
for(let o of st){       //遍历
    console.log(o)
}
