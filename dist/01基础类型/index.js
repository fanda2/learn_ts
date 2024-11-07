let isDone = false;
// let createByNewBoolean:boolean = new Boolean(1);
//使用构造函数 Boolean 创建的对象 不是 布尔值 
let createByBoolean = Boolean(1);
let decLiteral = 6;
let hexLiteral = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral = 0b1010;
// ES6 中的八进制表示法
let octalLiteral = 0o744;
let notANumber = NaN;
let infinityNumber = Infinity;
//2.任意数据类型
let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;  //不能将类型“number”分配给类型“string”
//如果是any类型的则允许
let myNumber = "seven";
myNumber = 7;
//在任意值上访问任何属性都是允许
let anyThing = 'hello';
//3.类型推理
// 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Typce Inference）的规则推断出一个类型。
//如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
let myFavoriteNumber1; //相当于 第二点any类型
myFavoriteNumber1 = 'seven';
myFavoriteNumber1 = 7;
//4.联合类型   联合类型使用 | 分隔每个类型。
let countNumber;
countNumber = 'six';
countNumber = 6;
countNumber = false;
let toney = {
    name: "fanda",
    age: 12
};
let tom = {
    name: "ggg",
};
let newTom = {
    name: "newTome",
    age: 12,
    gender: "男",
    height: 122,
    weight: 100
};
