//平稳退化？ 支持，当禁用js时，网页仍能正常工作，图片能查看
//分离Javascript 
//向后兼容
//性能考虑
//不要做太多假设 使用if语句检测元素是否存在，不在则return
function showPic(whichPic) {
    if(!document.getElementById("placeholder")) return false;
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    if(document.getElementById("descrition")){
        //切换文字是次要功能，是可选的，不能影响图片切换
        var text = whichPic.getAttribute("title");
        var descrition = document.getElementById("descrition");
        //firstChild lastChild nodeValue
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
            //当placeholder不存在，即没有占位符，会出现点击链接无响应的现象，因为默认行为也被取消了
            //showPic(this);return false;
            
            //当showPic返回true,则返回false,取消默认行为；
            //当showPic返回false,则返回true，保证网页的健壮性
            return !showPic(this);
        }
    }
}

// window.onload = prepareGallery();
//共享onload事件具有局限性，只能绑定一条指令

function addLoadEvent(func) {
    var oldonload = window.onload;
    if(typeof window.onload != 'function') {
        //若此处理函数未绑定任何函数，则直接把新函数添加给它
        window.onload = func;
    } else {
        //若已绑定，就把新函数追加到现有指令的末尾
        window.onload = function() {
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareGallery);