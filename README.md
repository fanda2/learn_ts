# Learn TypeScript
##系统学习ts的打卡记录
### tsconfig.json配置项
```json
{
 //includs 用来指定哪些需要编译的文件
 //exclude 用来指定哪些 不 需要编译的ts目录
 //默认不被编译的 : ["node_modules","bower_components","jspm_packages"];
 "include": [
    /*
     ** 表示：任意目录
     *表示：任意文件
    */
    "./src/**/*"
  ],

  //指定不包含哪些文件
  "exclude": [

  ],

  //compilerOptions 编译器的选项
  
  "compilerOptions": {
    // target 用来指定ts被编译为的ES版本
    "target": "ES6",
    // module 指定要使用的模块化规范
    "module": "ES6",
    // lib  用来指定项目中用到的库
    // "lib": [],
     //outDir 用来指定编译后的js文件输出的所在目录
    "outDir": "./dist",
    // outFile 将所有全局作用域的代码合并到一个文件
    // "outFile": "./dist/app.js",
    // allowJs 是否对js文件进行编译，默认是false
    "allowJs": false,
    //checkJs  是否检查js代码是否符合语法规范，默认是false
    "checkJs": false,
     
    // removeComments  是否移除注释
    "removeComments": false,
    // noEmit  不生成编译后的文件，执行编译过程但不生成js文件
    // noEmitOnError 当有错误时不生成编译后的jcs文件
    "noEmitOnError": false,
    // strict  所有严格检查的总开关，开发阶段建议打开，让代码更严谨
    // "strict": true,
    // alwayStrict 开启严格模式true,默认不开启false
    "alwaysStrict": false,
    // noImplicitAny 隐式的any类型
    "noImplicitAny": false,
    // noImplictiThis 不允许不明确的this
    // "noImplicitThis": true,

    //strictNullChecks 严格检查空值


    "moduleDetection": "force"
    }
  }
```
### 打卡11/9
### 打卡11/11
### 打卡11/14 基础知识完结
### 打开11/15 学习react
### 打卡11/18 打卡