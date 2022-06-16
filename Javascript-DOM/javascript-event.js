var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var day = now.getDate();
var date = year + "-" + month + "-" + day;

var notice = [
    {title: "띠니가 쓴 글", date: date, writer:"띠니", views : 3 },
    {title: "콩식이가 쓴 글", date: date, writer:"콩식이", views : 5 },
    {title: "유니가 쓴 글", date: date, writer:"유니", views : 7 },
    {title: "내가 쓴 글", date: date, writer:"나", views : 9 },
    {title: "찌식이가 쓴 글", date: date, writer:"찌식이", views : 11 }
];
var noticeCount = 0;
// Ex9 : 마우스 이벤트 : 박스의 옵셋 좌표 이동
window.addEventListener("load",function() {
    var section = document.querySelector("#section9");
    var container = section.querySelector(".container");
    var status = section.querySelector(".status");
    var dragging = false;
    var offset = {x:0,y:0};
    var current = null;
    var left = container.offsetLeft;    // 컨테이너 시작 왼쪽지점
    var top = container.offsetTop;      // 컨테이너 시작 위쪽지점

    console.log(left + " : " + top);
    section.onmousedown = function(e){
        
        if(e.target.classList.contains("box")){
            dragging=true;
            current = e.target;
            offset.x = e.offsetX;
            offset.y = e.offsetY;
            console.log(e.offsetX + " : " + e.offsetY);
        }
    };

    section.onmousemove = function(e){
        if(!dragging) return;

        var x = e.pageX-offset.x- left;
        var y = e.pageY-offset.y- top;
        current.style.left = x + 'px';
        current.style.top = y + 'px';

        status.innerText="( x , y ) : ( " +x+" : "+y+" )";
    };

    section.onmouseup = function(e) {
        dragging=false;
    };
});
// Ex8 : 마우스 이벤트 : 여러개 박스 마우스 드래그로 옮기기
window.addEventListener("load",function() {
    var section = document.querySelector("#section8");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    var dragging = false;
    var offset = {x:0,y:0};
    var current = null;

    container.onmousedown = function(e){
        
        if(e.target.classList.contains("box")){
            dragging=true;
            current = e.target;
            offset.x = e.offsetX;
            offset.y = e.offsetY;
        }
            
    };

    container.onmousemove = function(e){
        if(!dragging) return;
        current.style.left = (e.pageX-offset.x) + 'px';
        current.style.top = (e.pageY-offset.y) + 'px';
    };

    container.onmouseup = function(e) {
        dragging=false;
    };
});
// Ex7 : 마우스 이벤트 : 마우스 드래그 박스 옮기기
window.addEventListener("load",function() {
    var section = document.querySelector("#section7");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    var dragging = false;
    var offset = {x:0,y:0}
    container.onmousedown = function(e){
        if(e.target === box)
            dragging=true;
    };

    container.onmousemove = function(e){
        if(!dragging) return;
        box.style.left = (e.pageX-offset.x) + 'px';
        box.style.top = (e.pageY-offset.y) + 'px';
    };

    container.onmouseup = function(e) {
        dragging=false;
    };

    box.onmousedown = function(e) {
        offset.x = e.offsetX;
        offset.y = e.offsetY;
    }
});
// Ex6 : 마우스 이벤트 : 마우스 좌표
window.addEventListener("load",function() {
    var section = document.querySelector("#section6");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    
    container.onclick = function(e){
        console.log(e.x);
        console.log("client : " + e.clientX +", " +e.clientY);
        console.log("page : " + e.pageX + ", " + e.pageY)
        box.style.left = e.pageX + 'px';
        box.style.top = e.pageY + 'px';
    };
});
// Ex5 : Trigger
window.addEventListener("load", function() {
    var section = document.querySelector("#section5");
    var fileButton = section.querySelector(".file-button");
    var fileTriggerButton = section.querySelector(".file-trigger-button");

    fileTriggerButton.onclick = function() {
        var event = new MouseEvent("click",{
            'view' : window,
            'bubbles' : true,
            'cancelable' : true
        });
        fileButton.dispatchEvent(event);
    };
});
// Ex4 : 선택된 레코드 삭제하기 : event target
window.addEventListener("load", function(){
    var section = document.querySelector("#section4");
    var createBtn = section.querySelector(".create-btn2");
    var boardList = section.querySelector(".board-list");
    var deleteBtn;
    createBtn.onclick = function(e) {
        var templete = section.querySelector("thead tr").cloneNode(true);
        if(noticeCount >= notice.length){
            alert("추가할 게시글이 없습니다.");
            return;
        }
        templete.children[0].innerText = noticeCount+1;
        templete.children[1].innerHTML = '<a href="">'+notice[noticeCount].title+'</a>';
        templete.children[2].innerText = notice[noticeCount].date;
        templete.children[3].innerText = notice[noticeCount].writer;
        templete.children[4].innerText = notice[noticeCount].views;
        templete.children[5].innerHTML = '<input type="button" value="선택" class="select-btn"><input type="button" value="수정" class="modify-btn"><input type="button" value="삭제" class="delete-btn">';
        noticeCount++;
        boardList.querySelector("tbody").append(templete);
        
        section.querySelector("tbody").onclick = function(e) {
            if(e.target.nodeName!="INPUT") return;
            var tr = e.target.parentElement;
            if(e.target.classList.contains("select-btn")){
                for( ; tr.nodeName!="TR"; tr=tr.parentElement ){};
                tr.style.background = "yellow";
            } else if(e.target.classList.contains("modify-btn")){

            } else if(e.target.classList.contains("delete-btn")){
                

            }
        };
    };
});
// Ex3 : 버블링 이벤트 멈추기
window.addEventListener("load", function() {
    var section = document.querySelector("#section3");
    var addBtn = section.querySelector(".add-btn");
    var imgList = section.querySelector(".img-list");
    var currentImg = section.querySelector(".current-img");
    imgList.onclick = function(e) {
        console.log("imgBtn");
        if(e.target.nodeName != "IMG") return;
        currentImg.src = e.target.src;
        
    };
    addBtn.onclick = function(e) {
        e.stopPropagation();
        console.log("addBtn");
        var img = document.createElement("img");
        img.src = "images/img1.jpg";
        currentImg.insertAdjacentElement("afterend",img);
    };
});
// Ex2 : 버블링을 이용한 사용자 이벤트 처리
window.addEventListener("load", function() {
    var section = document.querySelector("#section2");
    var imgList = section.querySelector(".img-list");
    var currentImg = section.querySelector(".current-img");

    imgList.onclick = function(e) {
        if(e.target.nodeName != "IMG") return;
        currentImg.src = e.target.src;
    }
});

// 연습문제 1 : 선택된 레코드 삭제하기 : event target
window.addEventListener("load", function(){
    var section = document.querySelector(".section1-1");
    var createBtn = document.querySelector(".create-btn");
    var boardList = document.querySelector(".board-list");
    var deleteBtn;

    createBtn.onclick = function() {
        var templete = boardList.querySelector("thead tr").cloneNode(true);
        if(noticeCount >= notice.length){
            alert("추가할 게시글이 없습니다.");
            return;
        }
        templete.children[0].innerText = noticeCount+1;
        templete.children[1].innerHTML = '<a href="">'+notice[noticeCount].title+'</a>';
        templete.children[2].innerText = notice[noticeCount].date;
        templete.children[3].innerText = notice[noticeCount].writer;
        templete.children[4].innerText = notice[noticeCount].views;
        templete.children[5].innerHTML = '<input type="button" value="삭제" class="delete-btn">';
        noticeCount++;

        boardList.querySelector("tbody").append(templete);
        deleteBtn = boardList.querySelectorAll(".delete-btn");
        for(var i=0; i<deleteBtn.length; i++){
            deleteBtn[i].onclick = function(e) {
                e.target.parentElement.parentElement.remove();
            }
        }
    };
});
// Ex1 : 선택된 이미지 보여주기 : event target
window.addEventListener("load",function(){
    var section = document.querySelector("#section1");
    

});

