<template>
  <div id="home">
      <!--导航-->
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <!--滚动组件-->
      <scroll
              class="content"
              ref="scroll"
              :probe-type="3"
              @scroll="contentScroll"
              :pull-up-load="true"
              >
          <!--轮播图-->
          <home-swiper :banners="banners"></home-swiper>
          <!--推荐图标显示-->
          <recommend-view :recommends="recommends"></recommend-view>
          <!--本周流行图片显示-->
          <feature-view/>
          <!--tabcontrol-->
          <tab-control
                  class="tab-control"
                  :titles="['流行','新款','精选']"
                  @tabClick="tabClick"/>
          <!--商品列表-->
          <goods-list :goods="showGoods"/>
      </scroll>
      <!--向上的箭头组件-->
      <back-top @click="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  //公共组件
  import NavBar from "@/components/common/navbar/NavBar";
  import TabControl from "@/components/content/tabControl/TabControl";
  import GoodsList from "@/components/content/goods/GoodsList";
  import Scroll from "@/components/common/scroll/Scroll";
  import BackTop from "@/components/content/backTop/BackTop";
  //功能相关组件
  import HomeSwiper from "@/views/home/childComps/HomeSwiper";
  import RecommendView from "@/views/home/childComps/RecommendView";
  import FeatureView from "@/views/home/childComps/FeatureView";

  import {getHomeMultidata, getHomeGoods} from "@/network/home";

  export default {
    name: 'Home',
    components: {
        NavBar,
        TabControl,
        GoodsList,
        Scroll,
        BackTop,
        HomeSwiper,
        RecommendView,
        FeatureView,
    },
    data() {
     return {
         banners: [],
         recommends: [],
         goods: {
             'pop': {page: 0, list: []}, //流行
             'new': {page: 0, list: []}, //新款
             'sell': {page: 0, list: []}, //精选
         },
         currentType: 'pop',
         isShowBackTop: false
     }
    },
    computed: {
        showGoods() {
            return this.goods[this.currentType].list
        }
    },
    created() {
        // 1.请求多个数据
        this.getHomeMultidata()

        //2.请求商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')

        //3.监听item中图片加载完成
        this.$bus.on('itemImageLoad', ()=> {
            // console.log('------------');
            this.$refs.scroll.refresh()
        })
    },
    methods: {
        /*
        * 事件监听相关的方法
        */
        tabClick(index) {
            // console.log(index);
            switch (index) {
                case 0:
                    this.currentType = 'pop'
                    break
                case 1:
                    this.currentType = 'new'
                    break
                case 2:
                    this.currentType = 'sell'
                    break
            }
        },
        backClick() {
            // console.log('backClick');
            //this.$refs.scroll 获取scroll组件对象
            this.$refs.scroll.scrollTo(0, 0)  //回到顶部
        },
        contentScroll(position) {
            // console.log(position.y);
            this.isShowBackTop = (-position.y) > 1000  //BackTop组件的显示与隐藏
        },
        /*loadMore(){
            console.log('上拉加载更多');
            //加载上拉的图片列表
            this.getHomeGoods(this.currentType)

            //加载完后需要刷新
            this.$refs.scroll.scroll.refresh()
        },*/
        /*
        * 网络请求相关方法
        */
        getHomeMultidata() {
            getHomeMultidata().then(res => {
                // console.log(res);
                this.banners = res.data.banner.list
                this.recommends = res.data.recommend.list
            })
        },
        getHomeGoods(type) {
            //http://152.136.185.210:7878/api/hy66/home/data?type=pop&page=1
            const page = this.goods[type].page + 1   //动态获取对应的page
            getHomeGoods(type,page).then(res => {
                // console.log(res);
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page += 1

                //此方法告诉 better-scroll 数据已加载
                // this.$refs.scroll.finishPullUp()
            })
        }
    }
  }
</script>

<!--scoped作用域，只对当前组件生效-->
<style scoped>
    #home {
        padding-top: 44px;
        height: 100vh;/*vh viewport height*/
        position: relative;/*相对定位*/
    }

    .home-nav {
        background-color: var(--color-tint);
        color: white;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9;
    }
    .tab-control {
        position: sticky; /*设置tab停留*/
        top: 44px;
        z-index: 9;
    }
    .content {
        /*height: 600px;
        overflow: hidden;*/
        position: absolute; /*绝对定位*/
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
    /*.content {
        height: calc(100% - 93px);
        overflow: hidden;
        margin-top: 44px;
    }*/
</style>
