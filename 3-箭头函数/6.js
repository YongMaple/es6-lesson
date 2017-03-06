// 箭头函数中的写法
var o = {
    x : 1,
    func : function() { console.log(this.x) },
    test : function() {
        setTimeout(() => { this.func() }, 100);
    }
};
o.test();
