function positionMessage() {
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.top = "50px";
    elem.style.left =  "100px";
    //声明movement时未使用var，是一个全局变量，意味着可在positionMessage()函数外被取消
    //movement = setTimeout("moveMessage()",3000);
    moveElement("message",125,25,10);
    if(!document.getElementById("message2")) return false;
    var elem = document.getElementById("message2");
    elem.style.position = "absolute";
    elem.style.top = "50px";
    elem.style.left =  "50px";
    moveElement("message2",125,125,10);

}

function moveMessage(){
    if(!document.getElementById) return false;
    if(!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if(xpos==200&&ypos==100) return true;
    if(xpos<200) xpos++;
    if(xpos>200) xpos--;
    if(ypos<100) ypos++;
    if(ypos>100) ypos--;
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    movement = setTimeout("moveMessage()",10); 
}
//将moveMessage()抽象成moveElement()函数
function moveElement(element_ID,final_x,final_y,interval) {
    if(!document.getElementById) return false;
    if(!document.getElementById(element_ID)) return false;
    var elem = document.getElementById(element_ID);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if(xpos==final_x&&ypos==final_y) return true;
    if(xpos<final_x) xpos++;
    if(xpos>final_x) xpos--;
    if(ypos<final_y) ypos++;
    if(ypos>final_y) ypos--;
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+element_ID+"',"+final_x+","+final_y+","+interval+")";
    movement = setTimeout(repeat,interval);
}


addLoadEvent(positionMessage);
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
