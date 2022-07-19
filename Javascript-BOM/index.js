function clickMainBtn(btn){
  let container = document.querySelector("#container");
  let elseBtn = document.querySelectorAll("#container button");
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
  let elseBtn = document.querySelectorAll("#container button");
  container.style.filter='';
  console.log(btn.parentElement.parentElement);
  btn.parentElement.parentElement.reset();
  btn.parentElement.parentElement.style.display = 'none';
  elseBtn.forEach(x => x.setAttribute('onclick','clickMainBtn(this)') );
}