function geteHTTPObject() {
    if(typeof XMLHttpRequest == "undefined") {
        XMLHttpRequest = function() {
                try { return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            } catch(e) {}
                try { return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch(e) {}
                try { return new ActiveXObject("Msxml2.XMLHTTP");
            } catch(e) {}
            return false;
        }
    }
    return new XMLHttpRequest();
}

function getNewContent() {
    var request = geteHTTPObject();
    if(request){
        //Cross origin requests are only supported for protocol schemes: http……
        //Chrome中不支持file://协议,跨域请求只支持HTTP协议
            request.open("GET","http://121.199.74.42:3000/selectApply",true);
            request.onreadystatechange = function() {
            if(request.readyState == 4) {
                alert("Response Received")
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    } else {
        alert("sorry,your beowser dosen\'t support XMLHTTPRequest")
    }
    alert("Function Done")
    //Function告警框很可能会先于Response告警框,
    //因为在发送XMLHTTPRequst请求后，继续执行，不会等待响应返回
}
addLoadEvent(getNewContent);

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