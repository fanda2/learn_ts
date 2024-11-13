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
let fanda = {
    id: 12,
    age: 33,
    name: "fanda"
};
// fanda.id=122;  //无法为“id”赋值，因为它是只读属性
// 6.数组类型   [类型+方括号] 表示法
let numArr = [1, 2, 3, 4, 5];
//使用数组泛型来表示数组
let generic = [1, 2, 3, 4, 5, 6];
let newNumArr = [1, 2, 3, 4, 5];
// ******类数组不是数组类型 举例
// function num(){
//     let arg:number[]=arguments;
// }
// 改正
function num() {
    let arg = arguments;
}
function num1() {
    let args = arguments;
}
// IArguments是TypeScrit中已经定义好的
//7.函数的类型  函数声明 / 函数表达式
function sum(x, y) {
    return x + y;
} //使用函数时输入多余的参数都是不被允许的（多或者少，或者参数类型不正确）
//函数表达式
let mySum = function (x, y) {
    return x + y;
};
let mySum2 = function (x, y) {
    return x + y;
}; //这里的=>代表 Typescript 中的箭头
let mySum3 = (x, y) => x + y;
let searchName;
searchName = function (source, substring) {
    return source.search(substring) !== -1;
};
//可选参数，可选参数必须在必选参数后面！
//参数默认值，当参数有了默认值之后，不再收到可选参数必须在必须选参数后面的限制了.
// ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）：
function push(array, ...items) {
    items.forEach(function (item) {
        array.push(item);
    });
}
let a = [];
push(a, 1, 2, 3);
function isFish(animal) {
    if (typeof animal.swim == "function") {
        return true;
    }
    return false;
}
// 使用类型断言时一定要格外小心，尽量避免断言后调用方法或引用深层属性，以减少不必要的运行时错误。
// 关于断言部分的总结
// 1.联合类型可以被断言为其中一个类型
// 2/父类可以被断言为子类
// 3.任何类型都可以被断言为 any
// 4.any 可以被断言为任何类型
// 5.要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可
// 双重断言 （除非迫不得已，尽量不要使用断言）
// 9.当使用第三方库时，需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。
