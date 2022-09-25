<template>
    <header>
    <div class="header-title">
      <img src="img/camp-icon.png" class="header-logo">
      <span class="header-name">캠핑 가자 !</span> 
    </div>
    <div class="header-top-button">
      <div><img src="img/login-30.png" alt=""></div>
      <div><img src="img/chat-30.png" alt=""></div>
      <div><img src="img/bell-30.png" alt=""></div>
      <div><img src="img/menu-30.png" alt=""></div>
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
        props:['category'],
        
    }
</script>