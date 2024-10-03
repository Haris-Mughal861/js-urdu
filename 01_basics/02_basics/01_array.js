//Arrays


let myArr = [1,2,3,4,5]
console.log(typeof myArr);

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[0]);

//array Methods

myArr.push(7,4,5,6,7)
console.log(myArr);
myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr);


myArr.shift(7)
console.log(myArr);

console.log(myArr.includes(0));

console.log(myArr.indexOf(18));

console.log(myArr.indexOf(7));


console.log("A, myArr");

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("b", myArr);









