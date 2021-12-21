function getNextElement(node) {//取下一个元素节点
    if(node.nodeType==1) {
        return node;
    }
    if(node.nodeType) {
        return getNextElement(node.nextSibling)
    }
    return null;
}

function styleHeaderSilbings() {
    var headers = document.getElementsByTagName("h1")
    for(var i=0;i<headers.length;i++) {
        var elem =getNextElement(headers[i].nextSibling)
        elem.style.fontWeight = "bold";
        elem.style.fontSize = "1.2em";
    }
}
addLoadEvent(styleHeaderSilbings)

function addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}