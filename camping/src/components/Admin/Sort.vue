<template>
    <div @click="clickSort" class="sort-container">
        <img v-bind:src="source"/>
    </div>
</template>

<script>
    import asc from '@/assets/img/Table/asc.png'
    import desc from '@/assets/img/Table/desc.png'

    export default {
        props : ['column'],
        data: function () {
            return {
                type : 'asc'
            }
        },
        methods: {
            clickSort : function () {
                if(this.type == 'asc') {
                    this.type = 'desc';
                } else {
                    this.type = 'asc';
                }
            }
        },
        computed: {
            source : function() {
                if(this.type == 'asc'){
                    return desc;
                } else {
                    return asc;
                }
            }
        }
    }
</script>

<style scoped>
    .sort-container {
        width: 40px;
        height: 40px;
    }
</style>