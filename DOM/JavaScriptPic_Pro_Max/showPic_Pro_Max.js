
function showPic(whichPic) {
    if(!document.getElementById("placeholder")) return false;
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    if(document.getElementById("descrition")){
        var text = whichPic.getAttribute("title");
        var descrition = document.getElementById("descrition");
        descrition.firstChild.nodeValue = text;
    }
   return true;
}
function prepareGallery() {
    if(!document.getElementsByTagName)return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++) {
        links[i].onclick = function() {
            showPic(this);return false;
        }
    }
}


//插入到图片清单后面
function insertAfter(newElemnet,targetElement) {
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement) {
        //如果目标元素是parent的最后一个子元素，则将新元素直接追加到parent上
        parent.appendChild(newElemnet);
    } else {
        //否则，将新元素插入到目标元素和目标元素下一兄弟元素之间，即下一兄弟元素之前
        parent.insertBefore(newElemnet,targetElement.nextSibling);
    }
}
function dynamicCreat_after() {
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/notion-avatar.png");
    placeholder.setAttribute("alt","picture")
    var descrition = document.createElement("p");
    descrition.setAttribute("id","descrition");
    var desctext = document.createTextNode("choose an image");
    descrition.appendChild(desctext);

    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(descrition,placeholder);
}

//创建元素，将其插入到图片清单前面
function dynamicCreat_front() {
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/notion-avatar.png");
    placeholder.setAttribute("alt","picture")
    var descrition = document.createElement("p");
    descrition.setAttribute("id","descrition");
    var desctext = document.createTextNode("choose an image");
    descrition.appendChild(desctext);

    var gallery = document.getElementById("imagegallery");
    gallery.parentNode.insertBefore(placeholder,gallery);
    gallery.parentNode.insertBefore(descrition,gallery);

}

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

//addLoadEvent(dynamicCreat_after);
addLoadEvent(dynamicCreat_front);
addLoadEvent(prepareGallery);