window.onload = function() {
    // var testdiv = document.getElementById("testdiv");
    // alert(testdiv.innerHTML);

    //Dom动态创建
    var para = document.createElement("p");
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
    var text = document.createTextNode("Hello World !");
    para.appendChild(text);
}