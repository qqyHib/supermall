<template>
    <div class="goods-item">
        <!--@load 监听图片加载完成-->
        <img :src="goodsItem.show.img" alt="" @load="imageLoad">
        <div class="goods-info">
            <p>{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>  <!--价格-->
            <span class="collect">{{goodsItem.cfav}}</span> <!--收藏-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props: {
            goodsItem: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            imageLoad: function () {
                // console.log('imageLoad');
                // console.log(this.$bus.emit('itemImageLoad'));
                //事件总线发送事件
                this.$bus.emit('itemImageLoad')
            }
        }
    }
</script>

<style scoped>
    .goods-item{
        padding-bottom: 40px;
        position: relative;/*相对定位*/
        width: 48%;
    }

    .goods-item img {
        width: 100%;
        border-radius: 5px;
    }

    .goods-info {
        font-size: 12px;
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        overflow: hidden;
        text-align: center;
    }

    .goods-info p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }

    .goods-info .price {
        color: var(--color-high-text);
        margin-right: 20px;
    }

    .goods-info .collect {
        position: relative;
    }

    .goods-info .collect::before {
        content: '';
        position: absolute;
        left: -15px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    }


</style>