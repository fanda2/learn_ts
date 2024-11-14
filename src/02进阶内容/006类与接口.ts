// 接口 interface 可以用于对 对象的类型 进行描述


// 1.类实现接口
// 实现是面向对象中的概念，一般来说，一个类只能继承自另一个类，有时候不同类之间可以有一些共有特性。
// 这时候就可以把特性提取成接口，用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性。
interface Alarm{
    alert():void;
}

class Door{

}

class SecurityDoor extends Door implements Alarm{
    alert(){
        console.log("SecurityDoor alert");
    }
}

class Car implements Alarm{
    alert(){
        console.log("Car alert");
    }
}


//2.一个类可以实现多个接口
interface Light{
    lightOn():void;
    lightOff():void;
}
class NewCar implements Alarm,Light{
    alert():void{
        console.log("Car alert");
    };
    lightOn(): void {
        console.log("car light on");
    };
    lightOff(): void {
        console.log("car light off");
    }
};

// 3.接口继承接口
interface Alarm{
    alert():void;
}
interface LightableAlarm extends Alarm{
    lightOn():void;
    lightOff():void;
}

//接口继承类   
// 常见的面向对象语言中，接口是不能继承类的，但是在Typescript中却是可以的
class Point{
    x:number;
    y:number;
    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }
}

interface Point3d extends Point{
    z:number
}

let point3d:Point3d = {x:1,y:2,z:3};
// 为什么Typescript会支持接口继承类呢？ 实际上当我们在声明 class Point时，除了会创建一个名为Point的类之外，
// 同时也创建了一个名为Point的类型（实例类型）