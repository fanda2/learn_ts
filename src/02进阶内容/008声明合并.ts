// 如果定义了两个相同名字的函数、接口或者类，那么他们就会合并为一个类型

//1.函数合并
// 我们可以使用重载定义多个函数类型
function reverse(x:number):number;
function reverse(x:string):string;
function reverse(x:number|string):number|string{
    if(typeof x =="number"){
        return Number(x.toString().split('').reverse().join(''));
    }else if(typeof x === "string"){
        return x.split("").reverse().join("");
    }
}


// 2.接口合并
// 接口中的属性在合并时会简单的合并到一个接口中
// interface Alarm{
//     price:number;
// }
// interface Alarm{
//     weight:number;
// }
// 上面两个接口定义相当于
interface Alarm8{
    price:number;
    weight:number;
}

//合并的属性类型必须是唯一的，重复属性类型一样不会报错，类型不同则会报错；
// 接口中的方法同样可以合并
interface Alarm9{
    price:number;
    alert(s:string):string;
}
interface Alarm9{
    weight:number;
    alert(s:string,n:number):string;
}

//上面两个式子合并后为
interface Alarm9{
    price:number;
    weight:number,
    alert(s:string):string;
    alert(s:string,n:number):string;
}

//3.类的合并   类的合并与接口的合并规则一致；