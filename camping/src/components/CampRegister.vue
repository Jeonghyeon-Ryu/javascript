<template>
  <div class="camp-register">
      <h2>캠핑장 등록</h2>
      <div class="camp-register-image-container">
        <div class="camp-register-image-preview">
          <div v-for="img of images">
          </div>
        </div>
        <label>사진등록
          <input @change="changeImage($event)" @dragenter.prevent @dragover.prevent @dragdrop="dropImage($event)" type="file" multiple style="display:none;">
        </label>
      </div>
      <form class="camp-register-form" action="" onsubmit="return false">
        <label>캠핑장 이름<input type="text" class="camp-register-name"></label>
        <label>주소<input type="text" class="camp-register-address"></label>
        <label>사이트 수<input type="text" class="camp-register-site"></label>
        <label>가격<input type="text" class="camp-register-price"></label>
        <div>정보
          <div>
            <button type="button">화장실</button>
            <button type="button">주차장</button>
            <button type="button">샤워장</button>
            <button type="button">쓰레기장</button>
            <button type="button">데크</button>
            <button type="button">수영장</button>
            <button type="button">바비큐</button>
            <button type="button">장비대여</button>
            <button type="button">조리도구</button>
          </div>
        </div>
        <label>기타정보<textarea class="camp-register-info"></textarea></label>
        <div class="camp-register-form-button-container">
          <button type="submit">등록</button>
          <button type="reset">취소</button>
        </div>
      </form>
    </div>
</template>

<script>
  import { reactive, computed } from 'vue';

  export default {
    // setup() {
    //   const state = reactive({
    //     images:[]
    //   })
    // },
    data(){
      return {
        images : []
      }
    },
    computed : {
      imagesUrl : function(){
        let result = [];
        for(let image of this.images) {
          result.add(URL.createObjectURL(image));
        }
        console.log(result);
        return this.imagesUrl.add(result);
      }
    },
    methods : {
      changeImage(e) {
        this.images = e.target.files;
        for(let file of this.images){
          this.imageLoader(file);
        }
      },
      imageLoader(file) {
        let reader = new FileReader();
          reader.onload = e => {
            var img_style = 'width:100%;height:100%;z-index:none';
            let img = document.createElement('img');
            img.setAttribute('style', img_style);
            img.src = e.target.result;

            document.querySelector('.camp-register-image-preview').append(this.makeDiv(img, file));;
          }
          reader.readAsDataURL(file);
      },
      dropImage(e) {
        let files = {};
        e.preventDefault();
        e.stopPropagation();
        let dt = e.dataTransfer;
        files = dt.files;
        for(let f of files){
          this.imageLoader(f);
        }
      },
      makeDiv(img, file) {
        // 이미지안에 표시되는 체크박스의 속성
        let chk_style = 'width:30px;height:30px;position:absolute;font-size:24px;'
                    + 'right:0px;bottom:0px;z-index:999;background-color:rgba(255,255,255,0.1);color:#f00; border:none; cursor:pointer';
        let div_style = 'display:inline-block;position:relative;'
                    + 'width:150px;height:120px;margin:5px;border:1px solid #00f;z-index:1';
        let div = document.createElement('div')
        div.setAttribute('style', div_style)
        
        let btn = document.createElement('input')
        btn.setAttribute('type', 'button')
        btn.setAttribute('value', 'x')
        btn.setAttribute('delFile', file.name);
        btn.setAttribute('style', chk_style);
        btn.onclick = function(ev){
          let ele = ev.srcElement;
          let delFile = ele.getAttribute('delFile');
          console.log(this.images);
          console.log(this.images.length);
          for(let i=0 ;i<this.images.length; i++){
            if(delFile== this.images[i].name){
              this.images.splice(i, 1);      
            }
          }
          
          let dt = new DataTransfer();
          for(let f in this.images) {
            let file = this.images[f];
            dt.items.add(file);
          }
          btnAtt.files = dt.files;
          let p = ele.parentNode;
          attZone.removeChild(p)
        }
        div.appendChild(img)
        div.appendChild(btn)
        return div
      }
    }
  }
</script>

<style scoped src="@/assets/css/campRegister.css"></style>