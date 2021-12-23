function showSection(id) {
    var selections = document.getElementsByTagName("section");
    for(var i=0;i<selections.length;i++) {
        var current_selection = selections[i];
        if(current_selection.getAttribute("id") != id) {
        current_selection.style.display = "none";
        } else {
            current_selection.style.display = "block";
        }
    }
}

function prepare () {
    var navs = document.getElementsByTagName("nav");
    if(navs.length == 0) return false;
    var links = navs[0].getElementsByTagName("a");
    for(var i=0;i<links.length;i++) {
        var section_id = links[i].getAttribute("href").split("#")[1];
        document.getElementById(section_id).style.display = "none";
        links[i].destination = section_id;
        links[i].onclick = function() {
            showSection(this.destination);
            return false;
        }
    }
}

addLoadEvent(prepare);
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