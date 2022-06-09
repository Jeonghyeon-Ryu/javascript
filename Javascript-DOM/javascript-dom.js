window.addEventListener("load", function() {
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnEqual = document.getElementById("btn-equal");
    var txtResult = document.getElementById("txt-result");

    btnEqual.onclick = function() {
        txtResult.value = parseInt(txtX.value)+parseInt(txtY.value);
    };
});

window.addEventListener("load", function() {
    var section2 = document.getElementById("section2");
    var inputItem = section2.getElementsByTagName("input");

    inputItem[2].onclick = function() {
        inputItem[3].value = parseInt(inputItem[0].value)+parseInt(inputItem[1].value);
    };
});
// Ex3 : Slector 계산기 프로그램
window.addEventListener("load", function() {
    var section3 = document.getElementById("section3");
    // var inputItem = section3.getElementsByTagName("input");
    var txtX = section3.querySelector("input[name='x']");
    var txtY = section3.querySelector(".txt-y");
    var btnEqual = section3.querySelector(".btn-equal");
    var txtResult = section3.querySelector("input[name='result']");

    btnEqual.onclick = function() {
        txtResult.value = parseInt(txtX.value)+parseInt(txtY.value);
    };
});

// Ex4 : childNodes 를 이용한 노드선택
window.addEventListener("load", function() {
    var section4 = this.document.querySelector("#section4");
    var box = section4.querySelector(".box");
    // childNodes : 공백도 노드 취급
    // var input1 = box.childNodes[0];
    // var input2 = box.childNodes[1];
    // children : 태그만 취급
    var input1 = box.children[0];
    var input2 = box.children[1];
1  
    input1.value="hello";
    input2.value="okey";
});

// Ex5 : Element 노드의 속성 변경
window.addEventListener("load", function() {
    var section = this.document.querySelector("#section5");
    var srcInput = document.querySelector(".src-input");
    var changebutton = document.querySelector(".change-button");
    var img = document.querySelector(".img");
    var colorInput = document.querySelector(".color-input");

    srcInput.style.width = "300px";
    changebutton.onclick = function() {
        img.src = "images/" + srcInput.value;
        // img.style["border-color"] = colorInput.value;
        img.style.borderColor = colorInput.value;
    };
});
