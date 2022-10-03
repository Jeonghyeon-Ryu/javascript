<template>
    <div class="user-manage-container">
        <div class="user-manage-title">

        </div>
        <div class="user-manage-table">
            <UserTable :userData="userData"></UserTable>
        </div>
    </div>
</template>
<!-- -------------------------------------- -->
<script>
    import UserTable from './UserTable.vue';
    import users from './users';
    export default {
        data : function () {
            return {
                userData : users
            }
        },  
        components : {
            UserTable
        }
    }
</script>
<!-- -------------------------------------- -->
<style scoped>
    .user-manage-container{
        display:flex;
        justify-content: center;
        margin-top : 150px;
        width:100%;
        height: calc(100vw - 150px)
    }
    .user-manage-table {
        width: 90%;
        height: 100%;
    }
</style>