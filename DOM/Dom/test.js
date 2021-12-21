    //alert(typeof document.getElementById("purchase"));//object 返回对象

    //alert(document.getElementsByTagName("li").length);//3 返回数组对象

//组合使用 items包含id为purchase的无序清单里的元素
    // var shopping = document.getElementById("purchase");
    // var items = shopping.getElementsByTagName("*")
    // for(var i=0;i<items.length;i++) {
    //     alert(typeof items[i]);
    // }

//getAttribute 
    // var paras = document.getElementsByTagName("p");
    // for(var i=0;i<paras.length;i++) {
    //     alert(paras[i].getAttribute("title"));
    // }

//setArrtribute
    // var shopping = document.getElementById("purchase");
    // alert(shopping.getAttribute("title"));//null 该节点不存在title属性
    // shopping.setAttribute("title","a list of goods"); 
    // alert(shopping.getAttribute("title"));//a list of goods setArrtibute先创建属性后赋值

//动态刷新
    var paras = document.getElementsByTagName("p");
    for(var i=0;i<paras.length;i++) {
        var title_text = paras[i].getAttribute("title");
        if(title_text) {
            alert(paras[i].getAttribute("title"));
            paras[i].setAttribute("title","brand new title text");
            alert(paras[i].getAttribute("title"))
        }
    }
//通过setArrtribute修改文档后，查看源代码时属性还时修改前的属性，即setArrtribute修改不会反应到
//代码本身，Dom的工作模式：先加载静态内容，再动态刷新，动态刷新不影响文档的静态内容 
//“对页面内容进行刷新却不需要在浏览器里刷新页面”