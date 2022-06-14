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
// 연습문제 1 : 선택된 레코드 삭제하기 : event target
window.addEventListener("load", function(){
    var section = document.querySelector("#section4");
    var createBtn = section.querySelector(".create-btn2");
    var boardList = section.querySelector(".board-list");
    var deleteBtn;

    createBtn.onclick = function() {
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
        
        templete.cildren[5].onclick = function(e) {
            if(e.target.)
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

