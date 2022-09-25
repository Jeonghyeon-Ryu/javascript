import mainSwiper from '../component/MainSwiper.vue'

let app = new Vue({
    el:"#app",
    template: `<div>
                  <main-swiper></main-swiper>
              </div>`,
    components:{
        "main-swiper" : mainSwiper
    },
})