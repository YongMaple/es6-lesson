// 7.entries()，keys()和values()
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
