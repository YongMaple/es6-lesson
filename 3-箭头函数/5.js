// 3.this
// 猜猜执行结果
var o = {
    x: 1,
    func: function() {
        console.log(this.x)
    },
    test: function() {
        setTimeout(function() {
            this.func();
        }, 100);
    }
};
o.test();
