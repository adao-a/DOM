function scriptTable() {
    if(!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    var odd,rows
    for(var i=0;i<tables.length;i++) {
        odd = false;
        rows = tables[i].getElementsByTagName("tr")
        for(var j=0;j<rows.length;j++) {
            if(odd==true) {
                //rows[j].style.backgroundColor = "#ffc";
                addClass(rows[j],"odd")//通过className属性改变class而改变样式
                odd = false;
            } else odd =true;
        }
    }
}

function addClass(element,value) {
    if(!element.className) {
        //若该元素没有class,则直接把新class属性值赋值给clssName属性
        element.className =value;
    } else {
        //否则，将新class属性追加到className属性上去
        newClassName = element.className;
        newClassName+= " ";//注意空格
        newClassName+= value;
        element.className = newClassName;
    }
}

function highlightRows() {
    if(!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for(var i=0;i<rows.length;i++) {
        rows[i].onmouseover = function() {
            // rows[i].style.fontWeight = "bold";
            this.style.fontWeight = "bold";
        }
        rows[i].onmouseout = function() {
            this.style.fontWeight = "normal";
        }
    }
}
addLoadEvent(scriptTable);
addLoadEvent(highlightRows);
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