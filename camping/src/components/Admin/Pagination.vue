<template>
    <ul class="pagination">
        <li class="icon" @click="clickPrev()">
            <a href="#" @click.prevent><span class="fas fa-angle-left"></span>Prev</a>
        </li>
        <li v-for="i of pageCount" :pageNum="i" @click="clickPage(i)"><a href="#" 
                @click.prevent>{{startPage + i}}</a></li>
        <li class="icon" @click="clickNext()">
            <a href="#" @click.prevent>Next<span class="fas fa-angle-right"></span></a>
        </li>
    </ul>
</template>
<script>
export default {
    props: ['startPage', 'endPage', 'totalPage'],
    data: function () {
        return {
            currentPage: '',
            pageCount:10
        }
    },
    created: function () {
        this.currentPage = this.startPage + 1;
    },
    methods: {
        clickPrev: function () {
            // 현재페이지 - 10 해서 / 10  -> ceil -> *10
            this.currentPage = (Math.trunc((this.currentPage-10)/10)+1)*10;
        },
        clickPage: function (pageNum) {
            this.currentPage = this.startPage + pageNum;
        },
        clickNext: function () {
            if (this.currentPage % 10 == 0) {
                this.currentPage = this.currentPage + 1;
            } else {
                this.currentPage = this.currentPage - this.currentPage % 10 + 11;
            }
            if (this.currentPage > this.totalPage) {
                this.currentPage = this.totalPage;
            }
        }
    },
    watch: {
        currentPage: function (newVal, oldVal) {
            // 맨앞, 맨끝 페이지 도달 시 이벤트 차단
            if (newVal == 1) {
                document.querySelector('.fa-angle-left').parentElement.style.pointerEvents = 'none';
            } else if (newVal == this.totalPage) {
                document.querySelector('.fa-angle-right').parentElement.style.pointerEvents = 'none';
            } else {
                document.querySelector('.fa-angle-left').parentElement.style.pointerEvents = 'auto';
                document.querySelector('.fa-angle-right').parentElement.style.pointerEvents = 'auto';
            }

            // Current 페이지가 범위 안에 있을 경우.
            // Current 페이지에 Active 클래스 토글
            for(let aTag of document.querySelectorAll('.pagination li a')) {
                aTag.classList.remove('active');
            }
            this.$nextTick(function() {
                document.querySelector('li[pageNum="' + (newVal - this.startPage) + '"]').querySelector('a').classList.add('active');
            })

            this.$emit('changePage', this.currentPage);
        },
        endPage : function () {
            this.pageCount = this.endPage - this.startPage;
        }
    }
}
</script>
<style scoped src="./Pagination.css">

</style>
