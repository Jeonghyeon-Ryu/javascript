<template>
  <div class="camp-register-container">
    <h2>캠핑장 등록</h2>
    <div class="camp-register">
      <div>
        <div class="camp-register-image-container">
          <div class="camp-register-image-preview">
            <ImagePreview :images="images" :isNotList="false" @deleteImages="deleteImages"></ImagePreview>
          </div>
          <form id="camp-register-image-form" encrypt="multipart/form-data" style="padding:20px;">
            <label>사진등록
              <input @change="changeImage($event)" @dragenter.prevent @dragover.prevent
                @drop.prevent="dropImage($event)" type="file" multiple style="display:none;">
            </label>
          </form>
        </div>
        <form class="camp-register-form" action="" onsubmit="return false">
          <label>캠핑장 이름<input type="text" name="campName" class="camp-register-name"></label>
          <label class="camp-register-address-container">주소
            <div>
              <input @keyup.enter="campAddress()" type="text" name="campAddress" class="camp-register-address"
                placeholder="예시 : 주소 입력후 엔터를 누르세요.">
              <img @click="campAddress()" class="address-search-button" src="@/assets/img/icons/search-20.png" />
            </div>
            <div class="camp-register-kakaomap">
              <KakaoMap @setAddress="setAddress" :search="search" ref="kamap"></KakaoMap>
            </div>
          </label>
          <label>사이트 수<input type="text" name="campSite" class="camp-register-site" placeholder="예시 : 2개"></label>
          <label>가격<input type="text" name="campPrice" class="camp-register-price" placeholder="예시 : 00,000원"></label>
          <!-- <div class="camp-register-info">정보
            <div>
              <button type="button" @click="clickInfo($event)">화장실</button>
              <button type="button" @click="clickInfo($event)">주차장</button>
              <button type="button" @click="clickInfo($event)">샤워장</button>
              <button type="button" @click="clickInfo($event)">쓰레기장</button>
              <button type="button" @click="clickInfo($event)">데크</button>
              <button type="button" @click="clickInfo($event)">수영장</button>
              <button type="button" @click="clickInfo($event)">바비큐</button>
              <button type="button" @click="clickInfo($event)">장비대여</button>
              <button type="button" @click="clickInfo($event)">조리도구</button>
            </div>
          </div> -->
          <div class="camp-detail-info">
            <span>정보</span>
            <div class="camp-detail-info-buttons">
              <div class="row">
                <label class="checkboxLabel">
                  <input type="checkbox" name="campInfo" value="toilet" />
                  <div class="icon-box" @click="clickCheckBox($event)">
                    <img src="@/assets/img/Camping/toilet.png" />
                    <span>화장실</span>
                  </div>
                </label>
                <label class="checkboxLabel">
                  <input type="checkbox" name="campInfo" value="parking" />
                  <div class="icon-box" @click="clickCheckBox($event)">
                    <img src="@/assets/img/Camping/parking.png">
                    <span>주차장</span>
                  </div>
                </label>
                <label class="checkboxLabel">
                  <input type="checkbox" name="campInfo" value="shower" />
                  <div class="icon-box" @click="clickCheckBox($event)">
                    <img src="@/assets/img/Camping/shower.png" />
                    <span>샤워장</span>
                  </div>
                </label>
                <label class="checkboxLabel">
                  <input type="checkbox" name="campInfo" value="disposal" />
                  <div class="icon-box" @click="clickCheckBox($event)">
                    <img src="@/assets/img/Camping/disposal.png" />
                    <span>쓰레기장</span>
                  </div>
                </label>

                <label class="checkboxLabel">
                  <input type="checkbox" name="campInfo" value="deck" />
                  <div class="icon-box" @click="clickCheckBox($event)">
                    <img src="@/assets/img/Camping/deck.png" />
                    <span>데크</span>
                  </div>
                </label>

                <label class="checkboxLabel">
                  <input type="checkbox" name="campInfo" value="bbq" />
                  <div class="icon-box" @click="clickCheckBox($event)">
                    <img src="@/assets/img/Camping/bbq.png" />
                    <span>바비큐</span>
                  </div>
                </label>
                <label class="checkboxLabel">
                  <input type="checkbox" name="campInfo" value="swim" />
                  <div class="icon-box" @click="clickCheckBox($event)">
                    <img src="@/assets/img/Camping/swim.png" />
                    <span>수영장</span>
                  </div>
                </label>
                <label class="checkboxLabel">
                  <input type="checkbox" name="campInfo" value="kitchen" />
                  <div class="icon-box" @click="clickCheckBox($event)">
                    <img src="@/assets/img/Camping/spoon.png" />
                    <span>조리도구</span>
                  </div>
                </label>
                <label class="checkboxLabel">
                  <input type="checkbox" name="campInfo" value="lease" />
                  <div class="icon-box" @click="clickCheckBox($event)">
                    <img src="@/assets/img/Camping/lease.png" />
                    <span>장비대여</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <label>기타정보<textarea name="camp_detail_info" class="camp-register-etc-info"></textarea></label>
        </form>
      </div>
      <div class="camp-register-form-button-container">
        <button type="button" @click="insertRegister()">등록</button>
        <button type="button" @click="cancelRegister()">취소</button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import KakaoMap from '../KakaoMap.vue';
import Swal from 'sweetalert2';
import ImagePreview from '../ImagePreview.vue';

export default {
  data() {
    return {
      images: [],
      imagesUrl: [],
      search: ''
    }
  },
  components: {
    KakaoMap,
    ImagePreview
  },
  methods: {
    deleteImages(updatedImages) {
      this.images = updatedImages;
      document.querySelector('.camp-register-image-container input[type="file"]').files = updatedImages;
    },
    changeImage(e) {
      console.log(e.target);
      let dt = new DataTransfer();
      for (let i = 0; i < e.target.files.length; i++) {
        dt.items.add(e.target.files[i]);
      }
      this.images = dt.files;
      e.target.files = dt.files;
    },
    // dropImage(e) {
    //   let files = {};
    //   e.preventDefault();
    //   e.stopPropagation();
    //   let dt = e.dataTransfer;
    //   files = dt.files;
    //   for(let f of files){
    //     this.imageLoader(f);
    //   }
    // },
    campAddress() {
      let search = document.querySelector('.camp-register-address').value;
      let kakaoContainer = document.querySelector('.camp-register-kakaomap');
      if (search == null || search == '') {
        Swal.fire({
          icon: 'warning',
          title: '검색할 장소를 입력하세요.',
          toast: true,
          position: 'center-center',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        kakaoContainer.classList.remove('active');
      } else {
        if (!kakaoContainer.classList.contains('active')) {
          kakaoContainer.classList.toggle('active');
        }
        this.search = search;
        this.$refs.kamap.searchPlace(search);
      }
    },
    setAddress(address) {
      let kakaoContainer = document.querySelector('.camp-register-kakaomap');
      kakaoContainer.classList.remove('active');
      document.querySelector('.camp-register-address').value = address;
    },
    insertRegister() {
      let camp = {};
      new FormData(document.querySelector('.camp-register-form')).forEach((value, key) => camp[key] = value);
      for (let aa of document.querySelectorAll('input[type="checkbox"]')) {
        if (aa.checked) {
          camp.campInfo = camp.campInfo + ',' + aa.value;
        }
      }
      if (camp.campInfo != null) {
        if (camp.campInfo.indexOf(',') == 0) {
          camp.campInfo = camp.campInfo.substring(1, camp.campInfo.length);
        }
      }
      console.log(camp);
      // fetch('http://localhost:8087/java/camp', {
      //   method:'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(camp)
      // }).then(result => result.text())
      // .then(result => console.log(result))
      // .catch(err => console.log(err))

      // console.log(new FormData(document.querySelector('#camp-register-image-form')));
      console.log(this.images);
      let imageDatas = new FormData();
      for (let image of this.images) {
        console.log(image);
        imageDatas.append("files", image);
      }

      console.log(imageDatas);
      imageDatas.forEach(function(value,key){
        console.log(value);
      })

      fetch('http://localhost:8087/java/campImage', {
        method:"POST",
        headers:{ },
        body:imageDatas
      }).then(result => result.text())
      .then(result => console.log(result))
      .catch(err => console.log(err))
      // const obj2 = {};
      // imageData.forEach((value, key) => obj2[key] = value);

      // console.log(obj2);


      // Swal.fire({
      //   title: '정말로 등록하시겠습니까?',
      //   showCancelButton: true,
      //   confirmButtonText: '등록',
      //   cancelButtonText : '취소'
      // }).then((result) => {
      //   /* Read more about isConfirmed, isDenied below */
      //   if (result.isConfirmed) {
      //     Swal.fire('등록완료!', '', 'success')
      //   }
      // })
    },
    cancelRegister() {
      Swal.fire({
        title: '등록을 취소하시겠습니까?',
        text: '입력한 내용이 삭제됩니다.',
        showCancelButton: true,
        confirmButtonText: '취소',
        cancelButtonText: '계속 작성'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('취소 !', '', 'success')
        }
      })
    },
    clickCheckBox(e) {
      e.preventDefault();
      let checkItem = e.target.parentElement;
      while (!checkItem.classList.contains('checkboxLabel')) {
        checkItem = checkItem.parentElement;
      }
      checkItem = checkItem.querySelector('input');

      console.log(checkItem.checked);
      if (checkItem.checked) {
        checkItem.checked = false;
      } else {
        checkItem.checked = true;
      }
    },
  }
}
</script>

<style scoped src="@/assets/css/Camping/CampRegister.css">

</style>
<style scoped>
.image-preview-div {
  display: inline-block;
  position: relative;
  width: 150px;
  height: 120px;
  margin: 5px;
  border: 1px solid #00f;
  z-index: 1;
}

.image-preview-div img {
  width: 100%;
  height: 100%;
  z-index: none;
}

.image-preview-delete-button {
  width: 30px;
  height: 30px;
  position: absolute;
  font-size: 24px;
  right: 0px;
  bottom: 0px;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.1);
  color: #f00;
  border: none;
  cursor: pointer;
}
</style>