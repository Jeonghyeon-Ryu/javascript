<template>
  <ul class="cards">
    <li v-for="camp of camps">
      <a href="" class="card">
        <div class="card-img-container">
          <img src="" class="card-image" alt="" />
        </div>
        <div class="card-overlay">
          <div class="card-header">
            <svg class="card-arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <!-- <img class="card-thumb" src="img/img1.jpg" alt="" /> -->
            <div class="card-header-text">
              <div v-text="camp.campId" class="camp-id" style="display:none"></div>
              <h3 v-text="camp.campName" class="card-title"></h3>
              <span v-text="camp.campAddress" class="card-tagline"></span>
              <span class="card-status">1 hour ago</span>
            </div>
          </div>
          <p class="card-description">
            <img v-for="info of camps.camp_info" width="20" src="{{info}}" />
            <!-- <img v-if="camp.camp_info.parking" width="20" src="@/assets/img/Camping/parking.png" />
            <img v-if="camp.camp_info.shower" width="20" src="@/assets/img/Camping/shower.png" />
            <img v-if="camp.camp_info.disposal" width="20" src="@/assets/img/Camping/disposal.png" />
            <img v-if="camp.camp_info.deck" width="20" src="@/assets/img/Camping/deck.png" />
            <img v-if="camp.camp_info.bbq" width="20" src="@/assets/img/Camping/bbq.png" />
            <img v-if="camp.camp_info.swim" width="20" src="@/assets/img/Camping/swim.png" />
            <img v-if="camp.camp_info.spoon" width="20" src="@/assets/img/Camping/spoon.png" />
            <img v-if="camp.camp_info.lease" width="20" src="@/assets/img/Camping/lease.png" /> -->
          </p>
        </div>
      </a>
    </li>
  </ul>
</template>
<script>
  import img1 from "@/assets/img/main-image/main_0.jpg"
  import img2 from "@/assets/img/main-image/main_1.jpg"
  import img3 from "@/assets/img/main-image/main_2.jpg"
  import img4 from "@/assets/img/main-image/main_3.jpg"
  import img5 from "@/assets/img/main-image/main_4.jpg"
export default {
  data: function () {
    return {
      page: 1,
      camps: [ ],
    }
  },
  created : function() {
    fetch('http://localhost:8087/java/camp/'+this.page)
    .then(result => result.json())
    .then(result => {
      for(let i=0; i<result.length; i++) {
        result[i].campInfo = result[i].campInfo.split(' ');
        for(info of result[i].campInfo){
          info = '@/assets/img/Camping/' + info + '.png';
        }
        // result[i].campInfo =  infoArr.reduce((accumulator,value, index) => {
        //   return {...accumulator, [value]:true};
        // },{});
      }
      this.camps = result;
      console.log(this.camps);
    })
    .catch(err => console.log(err))
  }

}
</script>
<style scoped src="@/assets/css/Camping/CampList.css">

</style>