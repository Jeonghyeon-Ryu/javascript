<template>
    <v-grid 
        theme="material" 
        row-headers="true"
        :source="rows" 
        :columns="columns" 
        exporting="true"
    />
</template>
  
<script>
import VGrid from "@revolist/vue3-datagrid";
export default {
    data() {
        return {
            columns: [
                {
                    name: "회원번호",
                    prop: "member_id",
                    sortable: true,
                    cellProperties: ({ prop, model, data, column }) => {    // 셀 속성
                        return {
                            style: {
                                color: 'red'
                            },
                            // class: {
                            //     'bank': true
                            // }
                        };
                    },
                },
                {
                    name: "이메일",
                    prop: "member_email",
                    size: 200
                },
                {
                    name: "닉네임",
                    prop: "nickname",
                },
                {
                    name: "이름",
                    prop: "member_name",
                },
                {
                    name: "생년월일",
                    prop: "birth",
                    size: 150
                },
                {
                    name: "성별",
                    prop: "sex",
                },
                {
                    name: "연락처",
                    prop: "phone_number",
                    size: 150
                },
                {
                    name: "상태",
                    prop: "member_status",
                },
                {
                    name: "가입일",
                    prop: "regdate",
                    columnType: "date",
                    sortable: true,
                    size: 150
                }
            ],
            rows: [
                {
                    member_id : 1,
                    member_email : 'vxxv@naver.com',
                    nickname : '닉네임',
                    member_name : '류정현',
                    birth : '1991-01-01',
                    sex : '남',
                    phone_number : '010-0000-0000',
                    member_status : '활성',
                    regdate : '2002-01-01'

                }
            ],
        };
    },
    components: {
        VGrid,
    },
};
</script>
  
<style>
revo-grid {
    height: 100%;
    width:100%;
}
</style>