var o = {
    arrs: [
        'aaa',
        {
            second: 'bbb'
        }
    ]
};
var { arrs: [first,{ second }]} = o;
console.log(first, second);
