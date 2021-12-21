function prepareSlideshow() {
    //确保浏览器支持DOM方法
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    //确保元素存在
    if(!document.getElementById("linklist")) return false;
    if(!document.getElementById("preview")) return false;
    //为图片应用样式
    var preview = document.getElementById("preview");
    preview.style.position = "absolute";
    
    //在moveElement()函数中已添加安全检查，故可以不需要
    // preview.style.top = "0px";
    // preview.style.left = "0px";

    //取得列表中的所有链接
    var list = document.getElementById("linklist");
    var links = list.getElementsByTagName("a");
    //为mouseover事件添加动画效果
    links[0].onmouseover = function() {
        moveElement("preview",-150,0,10);
    }
    links[1].onmouseover = function() {
        moveElement("preview",-300,0,10);
    }
    links[2].onmouseover = function() {
        moveElement("preview",-450,0,10);
    }
    /*出现问题：如鼠标在链接之间快速切换，动画会混乱，来回跳动
      产生原因：在moveElement函数中只有一个movement全局变量，当鼠标悬停在某个链接时
               不管上一次调用是否已经移动到位，都会再次调用该函数，并且试图将图片移
               动到另一个位置。
               当快速移动鼠标时setTimeout队列里的事件会堆积，图片同时向两个方向移动
      解决方法：使用clearTimeout(movement);
               而movemwnt变量既不能使用全局变量，更不能使用局部变量，故将其绑定为元
               素的属性。          
    */
}

function moveElement(element_ID,final_x,final_y,interval) {
    if(!document.getElementById) return false;
    if(!document.getElementById(element_ID)) return false;
    var elem = document.getElementById(element_ID);
    if(elem.movement) {//若已有movement，则用clearTimeout将其复位
        clearTimeout(elem.movement);
    }
    if(!elem.style.left) {
        elem.style.left = "0px";
    }
    if(!elem.style.top) {
        elem.style.top = "0px";
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;
    if(xpos==final_x&&ypos==final_y) return true;
    // 不够德芙
    // if(xpos<final_x) xpos++;
    // if(xpos>final_x) xpos--;
    // if(ypos<final_y) ypos++;
    // if(ypos>final_y) ypos--;
    if(xpos<final_x) {
        //Math.ceil()向上取整
        dist = Math.ceil((final_x-xpos)/20)
        xpos +=dist;//每次移动距离的二十分之一
    }
    if(xpos>final_x) {
        dist = Math.ceil((xpos-final_x)/20)
        xpos -=dist;
    }
    if(ypos<final_y) {
        dist = Math.ceil((final_y-ypos)/20)
        ypos +=dist;
    }
    if(ypos>final_y) {
        dist = Math.ceil((ypos-final_y)/20)
        ypos -=dist;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+element_ID+"',"+final_x+","+final_y+","+interval+")";
    elem.movement = setTimeout(repeat,interval);
}

addLoadEvent(prepareSlideshow);

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