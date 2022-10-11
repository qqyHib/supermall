<template>
    <div class="back-top">
        <img src="~assets/img/common/top.svg">
    </div>
</template>

<script>
    export default {
        name: "BackTop",
        /*methods: {
            backClick() {
                console.log('回到顶部');
                this.$emit('backClick') //发出对应事件
            }
        }*/
    }
</script>

<style scoped>
    .back-top {
        position: fixed;
        right: 8px;
        bottom: 50px;
    }
    .back-top img {
        width: 43px;
        height: 43px;
    }
</style>