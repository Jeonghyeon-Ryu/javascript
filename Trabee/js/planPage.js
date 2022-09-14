window.addEventListener("DOMContentLoaded", function() {
    $('.category-button').on('click',clickCategory);
    // $('.plan-left-container :first-child').on('click',addPlan);
    $('.plan-left-container a').on('click',showPlan);
    $('.plan-left-container a').on('click','.modify-plan',modifyPlan);
    $('.plan-left-container a').on('click','.delete-plan',deletePlan);
    $('.search-button-container button').on('click',clickSearchButton);
})
/*************************/
//  1. clearClick : 모든 클릭 초기화
//  2. showPlan : 왼쪽 일정 클릭 ( 일정 확인 )
//  3. getPlan : 일정 가져오기 ( 일정 확인 - 데이터 )
//  4. addPlan : 왼쪽 일정 추가
//  5. modifyPlan : 왼쪽 일정 수정
//  6. deletePlan : 왼쪽 일정 삭제
//  7. clickCategory : 오른쪽 카테고리 클릭
//  8. checkCategory : 오른쪽 클릭된 카테고리 확인
//  9. clickSearchButton : 검색 버튼 클릭
// 10. 

/***************************** */
/** 클릭 초기화 */
/***************************** */
function clearClick(){
    $('.plan-left-container a').removeClass('plan-left-active');
    $('.search-button-container').css('display','none');
    $('.category-button').removeClass('category-button-active');
}

/***************************** */
/** 일정 선택 이벤트 */
/** 1. 일정 추가 / 선택 비교 확인 */
/**   (1) 일정 추가 : addPlan() */
/**   (2) 일정 선택 : 메소드내에서 실행 */
/** 2. 일정선택 시 이전 선택된 값 읽어서 필터 표시 */
/** 3. 이전 선택 값 없을 시 필터 초기화 */
/***************************** */
function showPlan(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if($(this).text()=="일정추가"){
        addPlan();
    } else {
        let src = $(this).children('img:eq(0)').attr('src');
        let index = src.substr(src.indexOf('.png')-1,1);
        // 클래스 토글        
        clearClick();
        $(this).addClass('plan-left-active');

        getPlan(this);
    }
}
/***************************** */
/** 상세페이지 오픈 */
/***************************** */
function getPlan(item) {
    // 내용 읽기
    let locationId = $(item).children('.location-id').text();
    let categoryName = $(item).children('.category-name').children('span').text();
    let locationName = $(item).children('.location-name').children('span').text();

    if(locationId==""){
        // 카테고리 선택창 오픈
        $('.plan-category').css('display','flex');
    } else {
        // 상세정보 창 오픈
        $('.plan-category').css('display','none');
    }
    // 상세페이지 오픈
}
/***************************** */
/** 일정 추가 이벤트 */
/***************************** */
function addPlan() {
    let index = $('.plan-left-container').children().length;
    // 마지막에 일정 추가
    $($('.plan-left-container').children()[index-1]).after(`<a href="" class="plan-left-active">
                                                                <img src="img/${index}.png">
                                                                <small class="location-id" style="display:none"></small>
                                                                <small class="category-name">계획 : <span></span></small><br>
                                                                <small class="location-name">장소 : <span></span></small>
                                                                <div>
                                                                    <button class="modify-plan">수정</button>
                                                                    <button class="delete-plan">삭제</button>
                                                                </div>
                                                            </a>`);
    // 추가된 일정에 active 클래스 토글 + 추가된 일정에 이벤트 부여
    clearClick();
    let addedNode = $($('.plan-left-container').children()[index]);
    addedNode.on('click',showPlan).addClass('plan-left-active');
    addedNode.on('click','.modify-plan',modifyPlan);
    addedNode.on('click','.delete-plan',deletePlan);
    getPlan(addedNode)
}
function modifyPlan() {
    console.log(this);
}
function deletePlan() {
    $(this).parent().parent().remove();
    $('.plan-left-container a img').each((index,element)=> {
        if(index>0){
            $(element).attr('src','img/'+index+'.png');
        }
    })
}
/***************************** */
/** 필터 선택 이벤트 */
/** 1. 선택된 일정에 카테고리 추가 */
/** 2. 검색 버튼 Visible */
/***************************** */
function clickCategory(e){
    // 선택된 Category Class Toggle
    $('.category-button').removeClass('category-button-active');
    $(this).addClass('category-button-active');
    // 현재 선택된 일정에 카테고리 추가
    $('.plan-left-container a').each((index, element)=>{
        console.log($(element).hasClass('plan-left-active'));
        if($(element).hasClass('plan-left-active')){
            $(element).children('.category-name span').text($(this).text());
        }
    })
    // 지역 & 장소 & 추천장소 버튼 Visible
    $('.search-button-container').css('display','flex');
}
/***************************** */
/** 필터 초기화 */
/***************************** */
// 선택된 필터 확인
function checkCategory(planCategory) {
    planCategory.querySelectorAll('.category-button')
}
// 지역검색 기능 이벤트
// 장소검색 기능 이벤트
// 추천장소 클릭 이벤트 
function clickSearchButton() {
    if($(this).text()=="지역 검색"){
        $('.plan-search-location').css('display','flex')
    } else if($(this).text()=="장소 검색") {

    } else {

    }
}

//  상위 selected button 클릭
$('.selected-option').on('click',showSelectOption);

function showSelectOption() {
    $(this)
        .parent('.plan-search-location')
        .children('ul')
        .toggleClass('opacity-1');
}

// 하위 Option 선택
$('.option-button').on('click',setSelectOption);
function setSelectOption() {
    $(this)
        .parents('.plan-search-location')
        .children('.selected-option')
        .text($(this).text());
    $(this).parents('ul').toggleClass('opacity-1');
}