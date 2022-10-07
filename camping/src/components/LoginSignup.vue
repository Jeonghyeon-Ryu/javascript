<template>
    <div class="login_container">
      <div class="cont_centrar">
        <div class="cont_login">
          <div class="cont_info_log_sign_up">
            <div class="col_md_login">
              <div class="cont_ba_opcitiy">
                <h2>Login</h2>
                <p>드루와드루와</p>
                <button class="btn_login" @click="click_login()">LOGIN</button>
              </div>
            </div>
            <div class="col_md_sign_up">
              <div class="cont_ba_opcitiy">
                <h2>Sign Up</h2>
                <p>캠핑 가족이 되어주세요 !</p>
                <button class="btn_sign_up" @click="click_sign_up()">SIGN UP</button>
              </div>
            </div>
          </div>
          <div class="cont_back_info">
            <div class="cont_img_back_grey">
              <img
                src="@/assets/img/login/login_background.jpg"
                alt="" />
            </div>
          </div>
          <div class="cont_forms">
            <div class="cont_img_back_">
              <img
                src="@/assets/img/login/login_background.jpg"
                alt="" />
            </div>
            <div class="cont_form_login">
              <a href="#" @render-tracked="ocultar_login_sign_up()"><i class="material-icons">&#xE5C4;</i></a>
              <h2>LOGIN</h2>
              <input type="text" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button class="btn_login" @click="clickLogin($event)">LOGIN</button>
              <button class="btn_login">KAKAO</button>
              <button class="btn_login">NAVER</button>
            </div>
            <div class="cont_form_sign_up">
              <a href="#" @click="ocultar_login_sign_up()"><i class="material-icons">&#xE5C4;</i></a>
              <h2>SIGN UP</h2>
              <input type="text" placeholder="이메일" />
              <input type="text" placeholder="닉네임" />
              <input type="password" placeholder="비밀번호" />
              <input type="password" placeholder="비밀번호 확인" />
              <input type="text" placeholder="주민등록번호(900101-1)" />
              <input type="text" placeholder="연락처" />
              <button class="btn_sign_up" @click="clickSignup()">SIGN UP</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        methods : {
            click_login : () => {
                document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";
                document.querySelector('.cont_form_login').style.display = "block";
                document.querySelector('.cont_form_sign_up').style.opacity = "0";

                setTimeout(function () { document.querySelector('.cont_form_login').style.opacity = "1"; }, 400);

                setTimeout(function () {
                    document.querySelector('.cont_form_sign_up').style.display = "none";
                }, 200);
            },
            click_sign_up : () => {
                document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
                document.querySelector('.cont_form_sign_up').style.display = "block";
                document.querySelector('.cont_form_login').style.opacity = "0";

                setTimeout(function () {
                    document.querySelector('.cont_form_sign_up').style.opacity = "1";
                }, 100);

                setTimeout(function () {
                    document.querySelector('.cont_form_login').style.display = "none";
                }, 400);
            },
            clickLogin : (e) => {
                let loginData = {
                  "memberEmail" : e.target.parentElement.querySelector('input[type="text"]').value,
                  "password" : e.target.parentElement.querySelector('input[type="password"]').value
                };
                console.log(loginData);
                fetch('http://localhost:8087/java/login',{
                  method:'POST',
                  headers: {
                    'Content-Type' : 'application/json'
                  },
                  body: JSON.stringify(loginData)
                })
                  .then(result => console.log(result))
                  .catch(error => console.log(error));
            },
            clickSignup : () => {
                console.log("회원가입 서버 통신");
            },
            ocultar_login_sign_up : () => {
                document.querySelector('.cont_forms').className = "cont_forms";
                document.querySelector('.cont_form_sign_up').style.opacity = "0";
                document.querySelector('.cont_form_login').style.opacity = "0";

                setTimeout(function () {
                    document.querySelector('.cont_form_sign_up').style.display = "none";
                    document.querySelector('.cont_form_login').style.display = "none";
                }, 500);
            }
        }
    }
</script>

<style scoped>
    .login_container {
    /* position: absolute; 뷰로 옮기면 없애야됨. */
    width: 100vw;
    display: flex;
    height: 100vh;
    background: rgb(253,250,246);
    background: linear-gradient(120deg, rgba(253,250,246,1) 0%, rgba(250,241,230,1) 50%, rgba(6,68,32,1) 100%);
    text-align: center;
  }
  
  .cont_centrar {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 100%;
  }
  
  .cont_login {
    position: relative;
    width: 640px;
  }
  
  .cont_back_info {
    position: relative;
    float: left;
    width: 640px;
    height: 400px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 1px 10px 30px -10px rgba(0, 0, 0, 0.5);
  }
  
  .cont_forms {
    position: absolute;
    overflow: hidden;
    top: 0px;
    left: 0px;
    width: 320px;
    height: 400px;
    background-color: #eee;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  
  .cont_forms_active_login {
    box-shadow: 1px 10px 30px -10px rgba(0, 0, 0, 0.5);
    height: 600px;
    top: -100px;
    left: 0px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  
  .cont_forms_active_sign_up {
    box-shadow: 1px 10px 30px -10px rgba(0, 0, 0, 0.5);
    height: 600px;
    top: -100px;
    left: 320px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  
  .cont_img_back_grey {
    position: absolute;
    width: 950px;
    top: -80px;
    left: -116px;
  }
  
  .cont_img_back_grey > img {
    width: 100%;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    opacity: 0.4;
    animation-name: animar_fondo;
    animation-duration: 20s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  
  .cont_img_back_ {
    position: absolute;
    width: 950px;
    top: -80px;
    left: -116px;
  }
  
  .cont_img_back_ > img {
    width: 100%;
    opacity: 0.4;
    animation-name: animar_fondo;
    animation-duration: 20s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  
  .cont_forms_active_login > .cont_img_back_ {
    top: -20px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  
  .cont_forms_active_sign_up > .cont_img_back_ {
    top: -20px;
    left: -435px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  
  .cont_info_log_sign_up {
    position: absolute;
    width: 640px;
    height: 400px;
    top: 0px;
    z-index: 1;
    display:flex;
    align-items: center;
  }
  
  .col_md_login {
    position: relative;
    width: 50%;
    display: flex;
    justify-content: center;
  }
  
  .col_md_login > h2 {
    font-weight: 400;
    margin-top: 70px;
    color: #757575;
  }
  
  .col_md_login > p {
    font-weight: 400;
    margin-top: 15px;
    width: 80%;
    color: #37474f;
  }
  
  .btn_login {
    background-color: rgb(250,241,230);
    border: none;
    padding: 10px;
    width: 200px;
    border-radius: 3px;
    box-shadow: 1px 5px 20px -5px rgba(0, 0, 0, 0.4);
    color: #000;
    margin-top: 15px;
    cursor: pointer;
  }
  
  .col_md_sign_up {
    position: relative;
    float: left;
    width: 50%;
    display: flex;
    justify-content: center;
  }
  
  .cont_ba_opcitiy > h2 {
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
  }
  
  .cont_ba_opcitiy > p {
    font-size : 0.9rem;
    font-weight: 400;
    margin-top: 15px;
    color: #fff;
  }
  .cont_ba_opcitiy {
    position: relative;
    background-color: rgba(120, 144, 156, 0.55);
    width: 80%;
    border-radius: 3px;
    padding: 15px 0px;
  }
  
  .btn_sign_up {
    background-color: rgb(6,68,32);
    border: none;
    padding: 10px;
    width: 200px;
    border-radius: 3px;
    box-shadow: 1px 5px 20px -5px rgba(0, 0, 0, 0.4);
    color: #fff;
    margin-top: 15px;
    cursor: pointer;
  }
  .cont_forms_active_sign_up {
    z-index: 2;
  }
  
  @keyframes animar_fondo {
    from {
      -webkit-transform: scale(1) translate(0px);
      -moz-transform: scale(1) translate(0px);
      -ms-transform: scale(1) translate(0px);
      -o-transform: scale(1) translate(0px);
      transform: scale(1) translate(0px);
    }
    to {
      -webkit-transform: scale(1.5) translate(50px);
      -moz-transform: scale(1.5) translate(50px);
      -ms-transform: scale(1.5) translate(50px);
      -o-transform: scale(1.5) translate(50px);
      transform: scale(1.5) translate(50px);
    }
  }
  @-o-keyframes identifier {
    from {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    to {
      -webkit-transform: scale(1.5);
      -moz-transform: scale(1.5);
      -ms-transform: scale(1.5);
      -o-transform: scale(1.5);
      transform: scale(1.5);
    }
  }
  @-moz-keyframes identifier {
    from {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    to {
      -webkit-transform: scale(1.5);
      -moz-transform: scale(1.5);
      -ms-transform: scale(1.5);
      -o-transform: scale(1.5);
      transform: scale(1.5);
    }
  }
  @keyframes identifier {
    from {
      -webkit-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      -o-transform: scale(1);
      transform: scale(1);
    }
    to {
      -webkit-transform: scale(1.5);
      -moz-transform: scale(1.5);
      -ms-transform: scale(1.5);
      -o-transform: scale(1.5);
      transform: scale(1.5);
    }
  }
  .cont_form_login {
    position: absolute;
    opacity: 0;
    display: none;
    width: 320px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  
  .cont_forms_active_login {
    z-index: 2;
  }
  
  .cont_form_sign_up {
    position: absolute;
    width: 320px;
    float: left;
    opacity: 0;
    display: none;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -ms-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
  }
  
  .cont_form_sign_up > input {
    text-align: left;
    padding: 15px 5px;
    margin-left: 10px;
    margin-top: 20px;
    width: 260px;
    border: none;
    color: #757575;
  }
  
  .cont_form_sign_up > h2 {
    margin-top: 50px;
    font-weight: 400;
    color: #757575;
  }
  
  .cont_form_login > input {
    padding: 15px 5px;
    margin-left: 10px;
    margin-top: 20px;
    width: 260px;
    border: none;
    text-align: left;
    color: #757575;
  }
  
  .cont_form_login > h2 {
    margin-top: 110px;
    font-weight: 400;
    color: #757575;
  }
  .cont_form_login > a,
  .cont_form_sign_up > a {
    color: #757575;
    position: relative;
    float: left;
    margin: 10px;
    margin-left: 30px;
  }
</style>