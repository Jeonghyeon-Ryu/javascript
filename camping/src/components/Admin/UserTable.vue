<template>
    <div class="table">
        <ul>
            <li class="table-header row">
                <input @click="checkAll($event)" type="checkbox" name="checkedUser" value="" />
                <div class="table-column" v-for="column of columns">{{column.name}}<Sort v-if="column.sortable" :column="column.prop" @sort="getSortData"></Sort>
                </div>
            </li>
            <li v-for="data of rows" class="table-body row">
                <input type="checkbox" name="checkedUser" value="" />
                <div class="table-column" v-for="column of columns">{{data[column.prop]}}</div>
            </li>
        </ul>
        <Pagination @changePage="changePage" :startPage="startPage" :endPage="endPage" :totalPage="totalPage"></Pagination>
    </div>
</template>

<script>
import Pagination from "./Pagination.vue";
import Sort from "./Sort.vue";

export default {
    props: ["userData", "perPage"],
    data: function () {
        return {
            columns: [
                {
                    name: "이름",
                    prop: "name",
                    sortable: true
                },
                {
                    name: "이메일",
                    prop: "email",
                    sortable: true
                },
                {
                    name: "성별",
                    prop: "gender"
                }
            ],
            rows: [],
            totalPage: 0,
            currentPage: 1,
        };
    },
    created: function () {
        let total = Object.keys(this.userData).length;
        this.totalPage = Math.ceil(total / this.perPage);
        for(let i=0; i<this.perPage; i++){
            this.rows.push(this.userData[i]);
        }
    },
    computed: {
        endPage: function () {
            if (((this.currentPage / 10) + 1) * 10 > this.totalPage) {
                return this.totalPage;
            } else {
                return (Math.trunc(this.currentPage/10)+1)*10;
            }
        },
        startPage: function () {
            if(this.endPage == this.totalPage){
                return (this.endPage - this.endPage%10)
            } else {
                return this.endPage - 10;
            }
        }
    },
    // 페이징 함수 rows로 보여줌,
    // 페이징 번호 저장 필요
    methods: {
        getSortData: function(column, type) {
            console.log(column, type);
            this.sortJSON(this.userData, column, type);
        },
        // JSON데이터 / 키값 / asc 또는 desc
        sortJSON: function (data, key, type) {
            if (type == undefined) {
                type = "asc";
            }
            return data.sort(function (a, b) {
                var x = a[key];
                var y = b[key];
                if (type == "desc") {
                    return x > y ? -1 : x < y ? 1 : 0;
                }
                else if (type == "asc") {
                    return x < y ? -1 : x > y ? 1 : 0;
                }
            });
        },
        test: function () {
            console.log(this.sortJSON(this.userData, "name", "asc"));
        },
        checkAll: function (e) {
            if(e.target.checked){
                for(let checkBoxItem of document.querySelectorAll('input[type="checkbox"]')){
                    checkBoxItem.checked=true;
                }
            } else {
                for(let checkBoxItem of document.querySelectorAll('input[type="checkbox"]')){
                    checkBoxItem.checked=false;
                }
            }
        },
        changePage: function(pageNum) {
            this.currentPage = pageNum;
        }
    },
    components: { Pagination, Sort }
}
</script>

<style scoped src="./UserTable.css">

</style>
