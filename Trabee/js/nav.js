/*****************************************/
/** 하단 네비 클릭 이벤트 */ 
/*****************************************/
function moveNav(id) {
    for(let bubble of document.querySelectorAll('.bubble')){
        bubble.classList.remove("bubble-active");
        bubble.querySelector("span").classList.remove("bubble-span-active");
    }
    let clickedButton = document.querySelector(`#bubble${id}`);
    clickedButton.classList.add("bubble-active");
    clickedButton.querySelector("span").classList.add("bubble-span-active");
    document.querySelector("#bgBubble").style.left = `calc(( 100% / 8 ) * ( 2 * ${id} - 1)`;
}