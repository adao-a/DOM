/*
1、遍历所有abbr元素
2、保存每个abbr元素的title属性
3、保存每个abbr元素包含的文本
4、创建一个“定义标题”的元素（即dl元素）
5、遍历defs
6、创建一个定义标题元素（即dt元素）
7、创建一个定义描述元素（即dd元素）
8、将dt、dd追加到dl元素上
9、将dl元素追加到body元素上*/

function diaplayAbbreviatons() {
    //检查兼容性
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    //取得所有缩略词
    var abbreviatons = document.getElementsByTagName("abbr");
    if(abbreviatons.length<1) return false;
    var defs = new Array();
    //遍历缩略词
    for(var i=0;i<abbreviatons.length;i++) {/*i变量未初始化，造成未进入循环*/
        var current_abbr = abbreviatons[i];/*使用current变量名，使程序易读*/       
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }
    var dlist = document.createElement("dl");
    for(key in defs) {
        var deinition = defs[key];
        //创建定义标题
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        //创建定义描述
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(deinition);
        ddesc.appendChild(ddesc_text);
        //将他们添加到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    //创建标题
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviatons")
    header.appendChild(header_text);
    //将标题添加到页面主体
    document.body.appendChild(header);
    //将定义列表添加到页面主体
    document.body.appendChild(dlist);
}


/* 
    1、遍历文档所有blockquote元素
    2、从blockquote元素中提取出cite属性的值
    3、创建一个标识文本是source的链接
    4、把这个链接的值赋值为cite的属性值
    5、把链接插入到文献节选的某位
*/

function displayCitations() {
    //检查兼容性
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    //取得所有blockquote
    var quotes = document.getElementsByTagName("blockquote")
    for(var i=0;i<quotes.length;i++) {
        if(!quotes[i].getAttribute("cite")) continue;
        //保存cite属性
        var url = quotes[i].getAttribute("cite");
        //创建标记
        var link = document.createElement("a")
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        //取得插入位置，引用中最后一个元素结点
        var quoteChildern = quotes[i].getElementsByTagName("*");
        if(quoteChildern.length<1) continue;
        var elem = quoteChildern[quoteChildern.length-1]
        elem.appendChild(superscript)
    }
}

function displayAccessKeys() {
    if(!document.getElementsByTagName) return false;
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    var links = document.getElementsByTagName("a");
    var akeys = new Array();
    for(var i=0;i<links.length;i++) {
        var current_link= links[i];
        if(!current_link.getAttribute("accesskey")) continue;
        var key = current_link.getAttribute("accesskey");
        var text = current_link.lastChild.nodeValue;
        akeys[key] = text;
    }
    var list = document.createElement("ul");
    for(key in akeys) {
        var text = akeys[key];
        var str = key +": "+ text;
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        list.appendChild(item);
    }
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Accesskeys");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(list);
}

addLoadEvent(diaplayAbbreviatons);
addLoadEvent(displayCitations);
addLoadEvent(displayAccessKeys);
