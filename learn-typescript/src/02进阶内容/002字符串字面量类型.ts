// 字符串字面量类型用来约束取值只能是某几个字符串中的一个

type EventNames = "click" | "scroll" | "mousemove";
function handleEvent(ele: Element, event:EventNames){
  //函数执行相关内容
}

handleEvent(document.getElementById("new"),"click");
// handleEvent(document.getElementById("new"),"dbclick"); 报错，因为类型不包含dbclick;