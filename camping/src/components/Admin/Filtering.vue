<template>
  <div @click="clickFilter" class="filter-container">
    <img v-bind:src="filterImg" />
  </div>
</template>

<script>
import filter from '@/assets/img/Table/filter.png'
export default {
  data: function() {
    return {
      filterImg : filter
    }
  },
  methods: {
    clickFilter: function () {

    }
  }
}
</script>

<style scoped>
.filter-container {
  height: 21px;
  width: 21px;
  overflow: hidden;
  cursor: pointer;
  margin-left:10px;
}

.filter-container img {
  height: 100%;
  object-fit: cover;
}
</style>