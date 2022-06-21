$('button').click(function () {
    email = $('input').val();

    var regEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

    //test 함수 == 문자열이 정규식을 만족하는지 판별하는 함수
    //조건을 만족하면 true를 반환, 만족하지 못하면 false반환
    if (regEmail.test(email)) {
        $('p').text("이메일 인증에 성공하였습니다.");
    } else {
        $('p').text("이메일이 유효하지 않습니다.");
    }

})
