function clickMainBtn(btn){
  var container = document.querySelector("#container");
  var elseBtn = document.querySelectorAll("#container button");
  container.style.filter = 'blur(5px)';
  elseBtn.forEach(x => x.setAttribute('onclick','return false;') );
  
  if(btn.getAttribute('id')=='signup-btn'){
    let signupForm = document.querySelector(".signup-form");
    signupForm.style.display = 'block';
  } else if(btn.getAttribute('id')=='login-btn'){
    let loginForm = document.querySelector(".login-form");
    loginForm.style.display = 'block';
  }
}
function  clickCloseBtn(btn){
  container.style.filter='';
  console.log(btn.parentElement.parentElement);
  btn.parentElement.parentElement.reset();
  btn.parentElement.parentElement.style.display = 'none';
  elseBtn.forEach(x => x.setAttribute('onclick','return false;') );
}

function clickSignupCloseBtn(){
  var signupForm = document.querySelector(".signup-form");
  // caller.reset()
  // caller.style.display='none';
  container.style.filter = '';
  signupForm.reset();
  signupForm.style.display = 'none';
}
function clickLoginCloseBtn(){
  var loginForm = document.querySelector(".login-form");
  // caller.reset()
  // caller.style.display='none';
  container.style.filter = '';
  loginForm.reset();
  loginForm.style.display = 'none';
}