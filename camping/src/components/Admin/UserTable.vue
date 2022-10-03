<template>
    <div class="table">
        <ul>
            <li class="table-header row">
                <input type="checkbox" name="checkedUser" value="" />
                <div class="table-column" v-for="column of columns">{{column.name}}</div>
            </li>
            <li v-for="data of userData" class="table-body row">
                <input type="checkbox" name="checkedUser" value="" />
                <div class="table-column" v-for="column of columns">{{data[column.prop]}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['userData'],
    data: function () {
        return {
            columns: [
                {
                    name:"이름",
                    prop:"name"
                },
                {
                    name:"이메일",
                    prop:"email"
                },
                {
                    name:"성별",
                    prop:"gender"
                }
            ],
            rows: [],
            currentPage: 1,
            totalPage: 0
        }
    }
    // 페이징 함수 rows로 보여줌,
    // 페이징 번호 저장 필요

}
</script>

<style scoped src="./UserTable.css"></style>
