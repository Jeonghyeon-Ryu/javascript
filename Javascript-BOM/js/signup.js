function regCheck(regExp, asValue){
	let checkIcon = asValue.nextSibling; 
	if(regExp.test(asValue.value) ){
		checkIcon.innerText='done';
		checkIcon.style.color='green';
	}else{
		checkIcon.innerText='warning';
		checkIcon.style.color='red';
	}
	checkIcon.style.visibility='visible';
}

function isId(asValue) {
	let regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
	regCheck(regExp,asValue);
}

function isPhoneNumber(asValue) {
	var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
	regCheck(regExp,asValue);
}

function isEmail(asValue) {
	var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	regCheck(regExp,asValue);
}

function isPassword(asValue) {
	var regExp = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
	regCheck(regExp,asValue);
}

function isPasswordConfirm(asValue) {
	let prevPassword = asValue.parentElement.previousSibling.previousSibling.children[0];
	let checkIcon = asValue.nextSibling; 
	if(asValue.value == prevPassword.value){
		checkIcon.innerText='done';
		checkIcon.style.color='green';
	} else {
		checkIcon.innerText='warning';
		checkIcon.style.color='red';
	}
	checkIcon.style.visibility='visible';
}

function validate() {
  var regExp = /^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-8][0-9]{6}$/;

  var num1 = document.getElementById("unum1");
  var num2 = document.getElementById("unum2");

  var arrNum1 = new Array(); // 주민번호 앞자리숫자 6개를 담을 배열
  var arrNum2 = new Array(); // 주민번호 뒷자리숫자 7개를 담을 배열

  // -------------- 주민번호 -------------

  for (var i=0; i<num1.value.length; i++) {
      arrNum1[i] = num1.value.charAt(i);
  } // 주민번호 앞자리를 배열에 순서대로 담는다.

  for (var i=0; i<num2.value.length; i++) {
      arrNum2[i] = num2.value.charAt(i);
  } // 주민번호 뒷자리를 배열에 순서대로 담는다.

  var tempSum=0;

  for (var i=0; i<num1.value.length; i++) {
      tempSum += arrNum1[i] * (2+i);
  } // 주민번호 검사방법을 적용하여 앞 번호를 모두 계산하여 더함

  for (var i=0; i<num2.value.length-1; i++) {
      if(i>=2) {
          tempSum += arrNum2[i] * i;
      }
      else {
          tempSum += arrNum2[i] * (8+i);
      }
  } // 같은방식으로 앞 번호 계산한것의 합에 뒷번호 계산한것을 모두 더함

  if((11-(tempSum%11))%10!=arrNum2[6]) {
      alert("올바른 주민번호가 아닙니다.");
      num1.value = "";
      num2.value = "";
      num1.focus();
      return false;
  }else{
    alert("올바른 주민등록번호 입니다.");
  }
}

function checkAll(){

}