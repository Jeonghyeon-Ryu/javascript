<template>
  <div class="modify-container">
    <h2>정보 수정</h2>
    <div v-for="column of columns" class="modify-row">
      <span>{{column.name}}</span>
      <input type="text" :value="modifiedData[column.prop]"/>
    </div>
    <div class="modify-button-container">
      <RButton :inputColor="'lightGreen'" :inputSize="'lg'" :inputValue="'수정'"></RButton>
      <RButton :inputColor="'cream'" :inputSize="'md'" :inputValue="'완료'"></RButton>
    </div>
  </div>
</template>
<script>
import RButton from './RButton.vue';
export default {
    props: ["columns", "modifyData"],
    data: function () {
        return {
            modifiedData: this.modifyData,
        };
    },
    components: { RButton }
}
</script>
<style scoped>
  .modify-container{
    position:absolute;
    top:150px;
    left: calc(50% - 200px);
    width:400px;
    background: #fff;
    border:1px solid rgb(220,220,220);
    padding:10px;
    border-radius: 30px;
  }
  .modify-container h2{
    padding:10px;
    text-align: center;
  }
  .modify-row{
    padding:5px 10px 5px 10px;
    display:flex;
    justify-content: space-between;
  }
  .modify-row input {
    padding:5px;
    border:1px solid rgb(220,220,220);
    border-radius: 5px;
  }
</style>