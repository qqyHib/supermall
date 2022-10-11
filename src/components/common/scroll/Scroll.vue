<template>
    <!--ref/children-->
    <!--ref如果是绑定在组件中的，那么通过this.$ref.refname获取到的是一个组件对象-->
    <!--ref如果是绑定在普通的元素中的，那么通过this.$ref.refname获取到的是一个元素对象-->
    <div class="wrapper" ref="wrapper111">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "Scroll",
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                scroll: null
            }
        },
        mounted() {
            // document.querySelector('.wrapper')
            //1.创建BScroll对象
            this.scroll = new BScroll(this.$refs.wrapper111, {
                probeType: this.probeType,  //手指滚动监听滚动的位置
                pullUpLoad: this.pullUpLoad, //上拉加载
                click: true,
            })

            //2.监听滚动的位置
            this.scroll.on('scroll', (position) => {
                // console.log(position);
                this.$emit('scroll', position)
            })

            // console.log(this.scroll);

            //Better-Scroll 在决定有多少区域可以滚动时，是根据scrollHeight属性决定
                //scrollHeight属性是根据放Better-Scroll 的content 中的子组件的高度
                //但是我们的首页中，刚开始在计算scrollHeight属性时，是没有将图片计算在内的
                //所以，计算出来的高度是错误的（1300+）
                //后来图片加载进来之后有了新的高度，但是scrollHeight属性并没有进行更新
                //所以滚动出现了问题
            // 如何解决该问题
                //监听每一张图片是否加载完成 ，只要有一张图片加载完成了，执行一次refresh()
                //如何监听图片加载完成？
                    //原生的js监听图片： img.onload = function(){}
                    //Vue中监听: @load='方法'
                //调用scroll的refresh()
            //如何将GoodsListItem中的事件传入到Home.vue中
                //因为涉及到非父子组件的通信，所以这里选择了事件总线
                //bus->总线
                //事件总线需要先安装mitt     npm install mitt -s
                //在全局配置main.js中引用
                    // import mitt from "mitt"
                    // app.config.globalProperties.$bus = new mitt()  //全局配置$bus
                //事件总线发送事件  this.$bus.emit('事件名称',参数)
                //监听事件总线      this.$bus.on('事件名称',回调函数(参数))

            // this.scroll.scrollHeight = 100000000
            this.scroll.refresh()  //刷新滚动的区域

            //3.监听上拉事件
            /*this.scroll.on('pullingUp', () => {
                // console.log('上拉加载更多');
                this.$emit('pullingUp')
            })*/
        },
        methods: {
            scrollTo(x, y, time=300) {
                // console.log(this.scroll);
                this.scroll.scrollTo(x, y, time)
            },
            finishPullUp() {
                this.scroll.finishPullUp()
            },
            refresh() {
                this.scroll.refresh()
            }
        }
    }
</script>

<style scoped>

</style>