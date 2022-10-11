<template>
    <!--TabBar封装组件-->
    <tab-bar>
        <tab-bar-item path="/home">
            <template v-slot:item-icon>
                <!--base.js【@vue/cli-service/lib/base.js】中配置了相应assets的路径-->
                <!--配置好路径，则引入对应文件夹下面的图片，前面只需要加符号’~‘就可以了-->
                <img src="~assets/img/tabbar/home.svg">
            </template>
            <template v-slot:item-icon-active>
                <img src="~assets/img/tabbar/home_active.svg">
            </template>
            <template v-slot:item-text>
                <div>首页</div>
            </template>
        </tab-bar-item>
        <tab-bar-item path="/category">
            <template v-slot:item-icon>
                <img src="@/assets/img/tabbar/class.svg">
            </template>
            <template v-slot:item-icon-active>
                <img src="@/assets/img/tabbar/class_active.svg">
            </template>
            <template v-slot:item-text>
                <div>分类</div>
            </template>
        </tab-bar-item>
        <tab-bar-item path="/cart">
            <template v-slot:item-icon>
                <img src="~assets/img/tabbar/shopcart.svg">
            </template>
            <template v-slot:item-icon-active>
                <img src="~assets/img/tabbar/shopcart_active.svg">
            </template>
            <template v-slot:item-text>
                <div>购物车</div>
            </template>
        </tab-bar-item>
        <tab-bar-item path="/profile">
            <template v-slot:item-icon>
                <img src="@/assets/img/tabbar/profile.svg">
            </template>
            <template v-slot:item-icon-active>
                <img src="@/assets/img/tabbar/profile_active.svg">
            </template>
            <template v-slot:item-text>
                <div>我的</div>
            </template>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "@/components/common/tabbar/TabBar";
    import TabBarItem from "@/components/common/tabbar/TabBarItem";

    export default {
        name: "MainTabBar",
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>