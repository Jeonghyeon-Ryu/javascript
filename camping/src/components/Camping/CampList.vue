<template>
  <ul class="cards">
    <li v-for="camp of camps">
      <a href="" class="card">
        <div class="card-img-container">
          <img :src="camp.image" class="card-image" alt="" />
        </div>
        <div class="card-overlay">
          <div class="card-header">
            <svg class="card-arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <!-- <img class="card-thumb" src="img/img1.jpg" alt="" /> -->
            <div class="card-header-text">
              <div v-text="camp.camp_id" class="camp-id" style="display:none"></div>
              <h3 v-text="camp.camp_name" class="card-title"></h3>
              <span v-text="camp.camp_address" class="card-tagline"></span>
              <span class="card-status">1 hour ago</span>
            </div>
          </div>
          <p class="card-description">
            <img v-if="camp.camp_info.toilet" width="20" src="@/assets/img/Camping/toilet.png" />
            <img v-if="camp.camp_info.parking" width="20" src="@/assets/img/Camping/parking.png" />
            <img v-if="camp.camp_info.shower" width="20" src="@/assets/img/Camping/shower.png" />
            <img v-if="camp.camp_info.disposal" width="20" src="@/assets/img/Camping/disposal.png" />
            <img v-if="camp.camp_info.deck" width="20" src="@/assets/img/Camping/deck.png" />
            <img v-if="camp.camp_info.bbq" width="20" src="@/assets/img/Camping/bbq.png" />
            <img v-if="camp.camp_info.swim" width="20" src="@/assets/img/Camping/swim.png" />
            <img v-if="camp.camp_info.spoon" width="20" src="@/assets/img/Camping/spoon.png" />
            <img v-if="camp.camp_info.lease" width="20" src="@/assets/img/Camping/lease.png" />
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
      camps: [
        {
          image:img1,
          camp_id: '1',
          camp_name: '테스트',
          camp_address: '캠핑장 주소 테스트',
          cmap_price: '50000',
          camp_site: '2',
          camp_info: {
            "toilet":true, 
            "parking":true, 
            "shower":true, 
            "disposal":true, 
            "deck":true, 
            "bbq":true, 
            "swim":true, 
            "spoon":true, 
            "lease":true}
        },
        {
          image:img2,
          camp_id: '1',
          camp_name: '테스트',
          camp_address: '캠핑장 주소 테스트',
          cmap_price: '50000',
          camp_site: '2',
          camp_info: {
            "toilet":true, 
            "parking":true, 
            "shower":true, 
            "disposal":true, 
            "deck":true, 
            "bbq":true, 
            "swim":true, 
            "spoon":true, 
            "lease":true}
        },
        {
          image:img3,
          camp_id: '2',
          camp_name: '테스트',
          camp_address: '캠핑장 주소 테스트',
          cmap_price: '30000',
          camp_site: '2',
          camp_info: {
            "toilet":false, 
            "parking":false, 
            "shower":false, 
            "disposal":false, 
            "deck":false, 
            "bbq":false, 
            "swim":true, 
            "spoon":true, 
            "lease":true}
        },
        {
          image:img4,
          camp_id: '3',
          camp_name: '테스트',
          camp_address: '캠핑장 주소 테스트',
          cmap_price: '50000',
          camp_site: '2',
          camp_info: {
            "toilet":true, 
            "parking":false, 
            "shower":true, 
            "disposal":true, 
            "deck":false, 
            "bbq":false, 
            "swim":true, 
            "spoon":true, 
            "lease":true}
        },
        {
          image:img5,
          camp_id: '4',
          camp_name: '테스트',
          camp_address: '캠핑장 주소 테스트',
          cmap_price: '50000',
          camp_site: '2',
          camp_info: {
            "toilet":true, 
            "parking":true, 
            "shower":false, 
            "disposal":true, 
            "deck":true, 
            "bbq":false, 
            "swim":true, 
            "spoon":false, 
            "lease":true}
        }
      ]
    }
  }

}
</script>
<style scoped src="@/assets/css/Camping/CampList.css">

</style>