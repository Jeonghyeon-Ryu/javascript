<template>
    <div class="table">
        <ul>
            <li class="table-header row">
                <input type="checkbox" name="checkedUser" value="" />
                <div class="table-column" v-for="column of columns">{{column.name}}<Sort v-if="column.sortable"></Sort></div>
            </li>
            <li v-for="data of userData" class="table-body row">
                <input type="checkbox" name="checkedUser" value="" />
                <div class="table-column" v-for="column of columns">{{data[column.prop]}}</div>
            </li>
        </ul>
        <Pagination></Pagination>        
    </div>
</template>

<script>
import Pagination from "./Pagination.vue";
import Sort from "./Sort.vue";

export default {
    props: ["userData"],
    data: function () {
        return {
            columns: [
                {
                    name: "이름",
                    prop: "name",
                    sortable : true
                },
                {
                    name: "이메일",
                    prop: "email"
                },
                {
                    name: "성별",
                    prop: "gender"
                }
            ],
            rows: [],
            currentPage: 1,
            totalPage: 0
        };
    },
    // 페이징 함수 rows로 보여줌,
    // 페이징 번호 저장 필요
    methods: {
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
            console.log(this.sortJSON(this.userData, "name","asc"));
        }
    },
    components: { Pagination, Sort }
}
</script>

<style scoped src="./UserTable.css"></style>
