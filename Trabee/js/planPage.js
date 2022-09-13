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


$(function(){
    var closeSelectTimeout;

    function hideMaterialList(parent){
        parent.css({
            'overflow': 'hidden'
        }).removeClass('isOpen');
        clearTimeout(closeSelectTimeout);
        closeSelectTimeout = setTimeout(function(){
            parent.parent().css({
                'z-index': 0  
            });
        }, 200);
    }
    $(document.body).on('mousedown', '.materialBtn, .select li', function(event){
        if(parseFloat($(this).css('opacity')) > 0 && $(document).width() >= 1008){
            var maxWidthHeight = Math.max($(this).width(), $(this).height());
            if($(this).find("b.drop").length == 0 || $(this).find("b.drop").css('opacity') != 1) {
                // .drop opacity is 1 when it's hidden...css animations
                drop = $('<b class="drop" style="width:'+ maxWidthHeight +'px;height:'+ maxWidthHeight +'px;"></b>').prependTo(this);
            }
            else{
                $(this).find("b.drop").each(function(){
                    if($(this).css('opacity') == 1){
                        drop = $(this).removeClass("animate");
                        return;
                    }
                })
            }
            x = event.pageX - drop.width()/2 - $(this).offset().left;
            y = event.pageY - drop.height()/2 - $(this).offset().top;
            drop.css({
                top: y,
                left: x
            }).addClass("animate");
        }
    });
    $(document.body).on('dragstart', '.materialBtn, .select li', function(e){
        e.preventDefault();
    })

    var selectTimeout;
    $(document.body).on('click', '.select li', function() {
        var parent = $(this).parent();
        parent.children('li').removeAttr('data-selected');
        $(this).attr('data-selected', 'true');
        clearTimeout(selectTimeout);
        if(parent.hasClass('isOpen')){
            if(parent.parent().hasClass('required')){
                if(parent.children('[data-selected]').attr('data-value')){
                    parent.parents('.materialSelect').removeClass('error empty');
                }
                else{
                    parent.parents('.materialSelect').addClass('error empty');
                }
            }
            hideMaterialList($('.select'));
        }
        else{
            var pos = Math.max(($('li[data-selected]', parent).index() - 2) * 48, 0);
            parent.addClass('isOpen');
            parent.parent().css('z-index', '999');
            if($(document).width() >= 1008){
                var i = 1;
                selectTimeout = setInterval(function(){
                    i++;
                    parent.scrollTo(pos, 50);
                    if(i == 2){
                        parent.css('overflow', 'auto');
                    }
                    if(i >= 4){
                        clearTimeout(selectTimeout);
                    }
                }, 100);
            }
            else{
                parent.css('overflow', 'auto').scrollTo(pos, 0);
            }
        }
    });

    $('.materialInput input').on('change input verify', function(){
        if($(this).attr('required') == 'true'){
            if($(this).val().trim().length){
                $(this).parent().removeClass('error empty');
            }
            else{
                $(this).parent().addClass('error empty');
                $(this).val('');
            }
        }
        else{
            if($(this).val().trim().length){
                $(this).parent().removeClass('empty');
            }
            else{
                $(this).parent().addClass('empty');
            }
        }
    });

    $(document.body).on('click', function(e) {
        var clicked;
        if($(e.target).hasClass('materialSelect')){
            clicked = $(e.target).find('.select').first();
        }
        else if($(e.target).hasClass('select')){
            clicked = $(e.target);
        }
        else if($(e.target).parent().hasClass('select')){
            clicked = $(e.target).parent();
        }

        if($(e.target).hasClass('materialSelect') || $(e.target).hasClass('select') || $(e.target).parent().hasClass('select')){
            hideMaterialList($('.select').not(clicked));
        }
        else{
            if($('.select').hasClass('isOpen')){
                hideMaterialList($('.select'));
            }
        }
    });
    hideMaterialList($('.select'));
})