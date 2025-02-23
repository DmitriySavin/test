const arr1 = [1,2,3,4,5,{key: 'value'}];
// const a = arr1[0];
// const b = arr1[1];
// const c = arr1[5];

const [a,b,c, ...rest] = arr1;
console.log(rest);
