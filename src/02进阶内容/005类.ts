//  1. 类的用法，使用constructor定义构造函数
class Animal{
    name;
    constructor(name){
        this.name=name;
    }
    sayHi(){
        return `My name is ${this.name}`;
    }
}
let aa1 = new Animal("tom");
console.log(aa1.sayHi());


// 2.类的继承  使用 extends 关键字实现继承，子类中使用 super 关键字来调用父类的构造函数和方法
class Cat extends Animal{
    constructor(name){
        super(name);
        console.log(this.name);
    }
    sayHi(): string {         
        return "Meow," + super.sayHi();  //调用父类的sayHi
    }
}

 // 3.取存器 getter和 setter 可以改变属性的赋值和读取行为
 class Animal1{
    constructor(name){
        this.name=name;
    }
    get name(){
        return "jack";
    }
    set name(value){
        console.log("setter: "+ value);
    }
 }

 let a2 = new Animal1("kitty");
 a2.name = "Tom";
 console.log(a2.name);


 // 4.静态方法 使用static修饰符修饰的方法称为静态方法，它不需要实例化，而是直接通过类来调用
 class Animal2{
    static isAnimal(a){
        return a instanceof Animal2;
    }
 }
 let a3 = new Animal("jack");
 Animal2.isAnimal(a3);  
 console.log( Animal2.isAnimal(a3));



 // 5.ES7 中的类用法
 // ES6中实例的属性只能通过构造函数中的 this.xxx 来定义，ES7提案中可以直接在类里面定义
 // ES7 提案中可以使用 static 定义一个静态属性


 // 6. Typescript 中类的用法
//  TypeScript 可以使用三种访问修饰符 pbulic  private  protected
// public 修饰的属性和方法是共有的，可以在任何地方被访问到，默认所有属性和方法都是public
// private 修饰属性或方法是私有的，不能在声明它的类外部访问
// protected 修饰的属性和方法是受保护的，它和private类似，区别是他在子类中也允许被访问的
class Animal3{
    public name;
    public constructor(name){
        this.name = name;
    }
}
let aaa = new Animal3("Jack");
console.log(aaa.name);
aaa.name = "Tom";
console.log(aaa.name);



// 7.抽象类   abstract 用于定义抽象和其中的抽象方法
// 抽象类是不允许被实例化的
abstract class Animal4{
    public name;
    public constructor(name){
        this.name=name;
    }
    public abstract sayHi();  //抽象方法必须被子类实现
}
// let a4 = new Animal4("Jack"); //会报错，不允许被实例化

class Cat1 extends Animal4{
    public sayHi(){
        console.log(`${this.name} is eating.`);
    }
}
// 给类加上 Typescript类型和 接口类似；
