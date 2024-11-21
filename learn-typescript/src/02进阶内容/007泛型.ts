// 泛型 是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
function createArray<T>(length:number,value:T):Array<T>{
    let result:T[] = [];
    for(let i=0;i<length;i++){
        result[i]=value;
    }
    return result;
}
// createArray<string>(3,'x');
// 也可以选择不指定类型，让其反推出来 createArray(3,'x');
console.log(createArray(3,'x'));

//上面例子中我i们使用 <T>,  其中 T 用来指代任意输入类型，在后面的输入value:T 和输出 Array<T>中即可使用

let myArr:Array<number>=[];
myArr = [1,2,3,3];


// 1. 多个类型参数
// 定义泛型的时候可以一次性定义对个类型参数
function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]];
}
swap([7,'string']);

// 2.泛型约束
// 在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所有不能随意的操作它的属性或方法
function loggingIdentify<T>(arg:T):T{
    // console.log(arg.length);  arg。length会报错，因为事先不知道arg的类型，所以无法直接调用length属性
    return arg;
}

//对泛型进行约束
interface Lengthwise{
    length:number;
}

function loggingIdentify1<T extends Lengthwise>(arg:T):T{
    console.log(arg.length);
    return arg;
}

// 多个类型参数之间也可以进行相互约束：
function copyFile<T extends U,U>(target:T,source:U):T{
    for(let id in source){
        target[id]=(<T>source)[id];
    }
    return target;
}
//T extends U 保证了 U 上不会出现T中不存在的字段
let x = {a:1,b:2,c:3,d:4};
console.log(copyFile(x,{b:10,d:20}));


// 3. 泛型接口  
// 可以使用接口的方式来定义一个函数需要符合的形状
interface SearchFunc{
    (source:string,subString:string):boolean;  //函数形状
}
let mySearch:SearchFunc;
mySearch = function(source:string,subString:string){
    return source.search(subString)!==-1;
}
// 当然可以用含有泛型的接口来定义函数的形状：
interface CreateArrayFunc{
    <T>(length:number,value:T):Array<T>;
}
let createArray1:CreateArrayFunc;
createArray1 = function<T>(length:number,value:T):Array<T>{
    let result:T[] = [];
    for(let i=0;i<length;i++){
        result[i]=value;
    }
    return result;
}
createArray1(3,"x");

//把泛型直接提前到接口上
// 当然可以用含有泛型的接口来定义函数的形状：
// interface CreateArrayFunc<T>{
//     (length:number,value:T):Array<T>;
// }
// let createArray1:CreateArrayFunc<any>;
// createArray1 = function<T>(length:number,value:T):Array<T>{
//     let result:T[] = [];
//     for(let i=0;i<length;i++){
//         result[i]=value;
//     }
//     return result;
// }


// 4.泛型类
// 与泛型接口类似，泛型也可以用于类的类型定义中：
class GenericNumber<T>{
    zeroValue: T;
    add:(x:T,y:T)=>T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x,y){return x+y;}