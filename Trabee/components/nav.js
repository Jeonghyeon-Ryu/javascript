export default {
  template : `<div id="nav-container">
                <div id="header-container">
                    <div id="header-logo">
                        <img src="img/bee.png" width="70px">
                        <span>Trabee</span>
                    </div>
                    <div id="header-search-box">
                        <input type="text" placeholder="장소 검색하기">
                        <img src="img/icons8-search-24.png">
                    </div>
                </div>
                <div id="top-navbar">
                    <div id="button-wrapper">
                        <button>1번메뉴</button>
                        <button>2번메뉴</button>
                        <button>3번메뉴</button>
                        <button>4번메뉴</button>
                        <button>5번메뉴</button>
                    </div>
                </div>
                <div id="bottom-navbar">
                    <div id="bubble-wrapper">
                        <div id="bubble1" class="bubble bubble-active"><span class="icon bubble-span-active"><img src="img/icons8-home-24.png"></span></div>
                        <div id="bubble2" class="bubble"><span class="icon"><img src="img/icons8-heart-24.png"></span></div>
                        <div id="bubble3" class="bubble"><span class="icon"><img src="img/icons8-airplane-24.png"></span></div>
                        <div id="bubble4" class="bubble"><span class="icon"><img src="img/icons8-good-24.png"></span></div>
                        <div id="bubble5" class="bubble"><span class="icon"><img src="img/icons8-user-24.png"></span></div>
                    </div>
                    <div id="menu-wrapper">
                        <div id="menu1" class="menuElement" onclick="moveNav('1')"><img src="img/icons8-home-24.png"></div>
                        <div id="menu2" class="menuElement" onclick="moveNav('2')"><img src="img/icons8-heart-24.png"></div>
                        <div id="menu3" class="menuElement" onclick="moveNav('3')"><img src="img/icons8-airplane-24.png"></div>
                        <div id="menu4" class="menuElement" onclick="moveNav('4')"><img src="img/icons8-good-24.png"></div>
                        <div id="menu5" class="menuElement" onclick="moveNav('5')"><img src="img/icons8-user-24.png"></div>
                    </div>
                    <div id="bg-wrapper">
                        <div id="bg"></div>
                        <div id="bgBubble"></div>
                    </div>
                </div>
                <svg width="0" height="0" >
                    <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" id="blurFilter"/>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -15" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                    </filter>
                    </defs>
                </svg>
              </div>`
}