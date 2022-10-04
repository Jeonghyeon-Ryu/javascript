<template>
    <ul class="pagination">
        <li class="icon">
            <a href="#"><span class="fas fa-angle-left"></span>Previous</a>
        </li>
        <li v-for="i of 10"><a href="#">{{startPage + i}}</a></li>
        <li class="icon">
            <a href="#">Next<span class="fas fa-angle-right"></span></a>
        </li>
    </ul>
</template>
<script>
    export default {
        props : ['startPage','endPage'],
        data : function() {
            return {
                currentPage : 1
            }
        },
        mounted : function(){
            this.currentPage  = startPage+1;
        }
    }
</script>
<style scoped src="./Pagination.css"></style>
