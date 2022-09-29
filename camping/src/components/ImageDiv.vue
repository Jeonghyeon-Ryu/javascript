<template>
  <div>
    <img :src="file.src"></img>
    <input type="button" value="X" :delFile="file.name" @click="deleteFile($event)"></input>
  </div>
</template>
<script>
  export default {
    data : () => {
      return {
        file : '',
      }
    }
    methods : {
      deleteFile : function(ev){
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
    }
  }

</script>

<style scoped>
  div {
    display:inline-block;
    position:relative;
    width:150px;
    height:120px;
    margin:5px;
    border:1px solid #00f;
    z-index:1;
  }
  button {
    width:30px;
    height:30px;
    position:absolute;
    font-size:24px;
    right:0px;
    bottom:0px;
    z-index:999;
    background-color:rgba(255,255,255,0.1);
    color:#f00;
    border:none;
    cursor:pointer;
  }
</style>