<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
    #tab-bar {
        display: flex; /*分列*/
        background-color: #f6f6f6;
        position: fixed; /*底部*/
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 -3px 1px rgba(100,100,100,.1);/*阴影偏移量，x偏移量，y偏移量 ，模糊程度*/
    }
</style>