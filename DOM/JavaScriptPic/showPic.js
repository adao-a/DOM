function showPic(whichPic) {
    var source = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text = whichPic.getAttribute("title");
    var descrition = document.getElementById("descrition");
    //firstChild lastChild nodeValue
    descrition.firstChild.nodeValue = text;
}
// function countBodyChildren(){
//     var body_element = document.getElementsByTagName("body")[0];
//     alert (body_element.childNodes.length);
// }
// window.onload = countBodyChildren;//页面加载时调用函数