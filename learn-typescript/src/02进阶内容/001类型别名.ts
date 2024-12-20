// 类型别名，用来给一个类型起新名字
type Name = string;
type NameResolver = ()=> string;
type NameOrResolver = Name | NameResolver;

function getName(n:NameOrResolver):Name{
    if(typeof n == "string"){
        return n;
    }else{
        return n();
    }
}

// 使用type创建类型别名，类型别名常用于联合类型