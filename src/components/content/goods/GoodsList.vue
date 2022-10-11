<template>
    <div class="goods">
        <goods-list-item v-for="item in goods" :goods-item="item"/>
    </div>
</template>

<script>
    import GoodsListItem from "@/components/content/goods/GoodsListItem";
    export default {
        name: "GoodsList",
        components: {
            GoodsListItem
        },
        props: {
            goods: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .goods {
        display: flex;
        flex-wrap: wrap; /*包裹图片的宽度，按照设置的width显示*/
        justify-content: space-around;/*设置均等分*/
        padding: 2px;
    }
</style>