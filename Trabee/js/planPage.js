window.addEventListener("DOMContentLoaded", function() {
    $('.category-button').on('click',clickCategory);
    // $('.plan-left-container :first-child').on('click',addPlan);
    $('.plan-left-container a').on('click',clickPlan);
    $('.plan-left-container a').on('click','.modify-plan',modifyPlan);
    $('.plan-left-container a').on('click','.delete-plan',deletePlan);
})

/***************************** */
/** 일정 선택 이벤트 */
/** 1. 일정 추가 / 선택 비교 확인 */
/**   (1) 일정 추가 : addPlan() */
/**   (2) 일정 선택 : 메소드내에서 실행 */
/** 2. 일정선택 시 이전 선택된 값 읽어서 필터 표시 */
/** 3. 이전 선택 값 없을 시 필터 초기화 */
/***************************** */
function clickPlan(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if($(this).text()=="일정추가"){
        addPlan();
    } else if ($(this).text().indexOf("번째")){
        $('.plan-left-container a').removeClass('plan-left-active');
        $(this).addClass('plan-left-active');
    }
}

/***************************** */
/** 일정 추가 이벤트 */
/***************************** */
function addPlan() {
    let index = $('.plan-left-container').children().length;
    // 마지막에 일정 추가
    $($('.plan-left-container').children()[index-1]).after(`<a href="" class="plan-left-active">
                                                                <img src="img/${index}.png">
                                                                <small class="category-name">계획 : <span></span></small>
                                                                <br><small class="location-name">장소 : </small>
                                                                <div>
                                                                    <button class="modify-plan">수정</button>
                                                                    <button class="delete-plan">삭제</button>
                                                                </div>
                                                            </a>`);
    // 추가된 일정에 active 클래스 토글 + 추가된 일정에 이벤트 부여
    $('.plan-left-container a').removeClass('plan-left-active');
    let addedNode = $($('.plan-left-container').children()[index]);
    addedNode.on('click',clickPlan).addClass('plan-left-active');
    addedNode.on('click','.modify-plan',modifyPlan);
    addedNode.on('click','.delete-plan',deletePlan);
}
function modifyPlan() {
    console.log(this);
}
function deletePlan() {
    $(this).parent().parent().remove();
    $('.plan-left-container a').each((index,element)=> {
        console.log($(element).attr('src'));
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
    $('.plan-category button').css('display','inline-block');
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

