<template>
    <div>
        <router-view/>
        <!--TabBar封装组件-->
        <main-tab-bar/>
    </div>
</template>

<style>
  @import "assets/css/base.css";
</style>

<script>
    import MainTabBar from "@/components/content/mainTabbar/MainTabBar";
    export default {
      name: '',
      components: {
          MainTabBar
      }
    }
</script>
