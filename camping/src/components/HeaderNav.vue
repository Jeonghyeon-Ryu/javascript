<template>
  <header>
    <div class="header-top-container">
      <div class="header-title">
        <img src="../assets/img/camp-icon.png" class="header-logo">
        <span class="header-name">캠핑 가자 !</span> 
      </div>
      <div class="header-top-button">
        <div><img src="../assets/img/login-30.png" alt=""></div>
        <div><img src="../assets/img/chat-30.png" alt=""></div>
        <div><img src="../assets/img/bell-30.png" alt=""></div>
        <div><img src="../assets/img/menu-30.png" alt=""></div>
      </div>
    </div>
    <div class="header-middle-button" >
      <div>캠핑장</div> 
      <div>캠핑장</div> 
      <div>캠핑장</div> 
      <div>캠핑장</div> 
    </div>
  </header>
</template>

<script>
    export default {
      name: 'HeaderNav',
        props:['category'],
        
    }
</script>

<style scoped src="../assets/css/header.css"></style>