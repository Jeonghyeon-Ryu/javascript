<template>
    <ul class="pagination">
        <li class="icon" @click="clickPrev()">
            <a href="#" @click.prevent><span class="fas fa-angle-left"></span>Prev</a>
        </li>
        <li v-for="i of pageCount" :pageNum="startPage + i" @click="clickPage(i)"><a href="#" :class="{active : currentPage==i}"
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
            currentPage: 1,
            pageCount:10
        }
    },
    mounted: function () {
        this.currentPage = this.startPage + 1;
        if (this.currentPage == 1) {
            document.querySelector('.fa-angle-left').parentElement.style.pointerEvents = 'none';
        }
        document.querySelector('li[pageNum="' + this.currentPage + '"]').querySelector('a').classList.add('active');
    },
    methods: {
        clickPrev: function () {
            if (this.currentPage % 10 == 0) {
                this.currentPage = this.currentPage - 10;
            } else {
                this.currentPage = this.currentPage - this.currentPage % 10;
            }
            if (this.currentPage <= 0) {
                this.currentPage = 1;
            }
        },
        clickPage: function (pageNum) {
            this.currentPage = pageNum;
        },
        clickNext: function () {
            if (this.currentPage % 10 == 1) {
                this.currentPage = this.currentPage + 10;
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
            if (newVal <= this.endPage && newVal > this.startPage) {
                if (oldVal > this.startPage && oldVal <= this.endPage) {
                    document.querySelector('li[pageNum="' + oldVal + '"]').querySelector('a').classList.remove('active');
                }
                document.querySelector('li[pageNum="' + newVal + '"]').querySelector('a').classList.add('active');
            }

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
