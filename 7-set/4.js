//NaN的特殊情况
let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
console.log(set.size);
