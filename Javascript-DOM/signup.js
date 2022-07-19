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

function checkAll(){

}