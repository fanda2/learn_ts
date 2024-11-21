// 枚举类型用于取值被限制在一定范围内的场景，比如一周只有七天，颜色限定为红色，蓝色，绿色等
// 枚举关键词 enum 
enum Days {Sun,Mon,Tue,Wed,Thu,Fri,Sat};
//ts 经过编译为js后为以下内容
// var Days;
// (function (Days) {
//     Days[Days["Sun"] = 0] = "Sun";
//     Days[Days["Mon"] = 1] = "Mon";
//     Days[Days["Tue"] = 2] = "The";
//     Days[Days["Wed"] = 3] = "Wed";
//     Days[Days["Thu"] = 4] = "Thu";
//     Days[Days["Fri"] = 5] = "Fri";
//     Days[Days["Sat"] = 6] = "Sat";
// })(Days || (Days = {}));

console.log(Days["sun"]===0);   //true
console.log(Days["Mon"]===1);   //true
console.log(Days["Tue"]===2);   //true;

console.log(Days[0]==='Sun');   //true;
console.log(Days[1]==="Mon");   //true



//枚举也可进行手动赋值
enum Days1 {Sun=7,Mon=1,Tue,Wed,Thu,Fri,Sat};

console.log(Days1["Sun"] === 7);   //true
console.log(Days1["Mon"] === 1);   //true

console.log(Days1["Tue"] === 2);  //true
console.log(Days1["Sat"] === 6);  //true

//若未手动赋值的枚举项与手动赋值的重复了，Typescript是不会察觉到这一点的。例如
enum Days2 {Sun=3,Mon=1,Tue,Wed,Thu,Fri,Sat}
console.log(Days2["Sun"] === 3);   //true
console.log(Days2["Wed"] === 3);   //true
// ****使用的时候需要注意，最好不要出现这种覆盖情况****
// 手动赋值的枚举也可以成为小数或者负数，此时后续未手动赋值的项步长依然为1


// 枚举可以分为两类： 常数项目，计算所得项
// 之前的例子均为常数项，一个典型的计算所得项例子
enum Color {Red,Green,Blue="blue".length};

// enum Color {Blue="blue".length,Red,Green};  //报错，在计算项后面手动赋值会导致后面想无法获得初始值而报错

//***常数枚举
const enum Directions{
    Up,Down,Left,Right
}
// 编译后的结果 上面的定义不存在了
// let directions = [0 /* Directions.Up */, 1 /* Directions.Down */, 2 /* Directions.Left */, 3 /* Directions.Right */];
let directions = [Directions.Up,Directions.Down,Directions.Left,Directions.Right];
// 常数枚举与普通枚举的区别是，它在编译阶段被删除，并且不能包含计算成员


//***外部枚举
// 外部枚举 是使用declare enum定义的类型
declare enum Directions1{
    Up, Down, Left, Right
}
let directions1 = [Directions1.Up,Directions1.Down,Directions1.Left,Directions1.Right];


declare const enum Directions2{
    Up, Down, Left, Right
}
let directions2 = [Directions2.Up,Directions2.Down,Directions2.Left,Directions2.Right];