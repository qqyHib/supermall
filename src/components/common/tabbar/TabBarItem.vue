<template>
    <!--所有的item都展示同一个图片和同一个文字 -->
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        //接收参数
        props: {
            path: String,
            activeColor: {
                type: String,
                default: 'red'
            }
        },
        data() {
            return{
                // isActive: true
            }
        },
        computed: {
          isActive() {
              // /home -> item1(/home) true
              // /home -> item2(/category) false
              // /home -> item3(/profile) false
              // /home -> item4(/cart) false
              return this.$route.path.indexOf(this.path) != -1
          },
          activeStyle() {
              //this.isActive是否处于活跃
              return this.isActive ? {color: this.activeColor} : {}
          }
        },
        methods: {
            itemClick() {
                // console.log('itemClick');
                this.$router.replace(this.path)
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item {
        flex: 1 /*均等分*/;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }

    .tab-bar-item /deep/img {
        height: 24px;
        width: 24px;
        margin-top : 3px;
        vertical-align: middle;/*去除图片与文字之间的空间*/
        margin-bottom: 3px;
    }

    /*.active{
        color: #42b983;
    }*/
</style>