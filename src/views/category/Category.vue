<template>
    <div class="wrapper" ref='aaa'>
        <ul class="content">
            <!--1.无论是否设置click:false，button都是可以点击-->
            <button @click="btnClick">按钮</button>

            <!--2.必须设置click:true，div才能监听点击-->
            <div @click="divClick">测试div</div>

            <li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li>
            <li>分类列表1</li><li>分类列表2</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li>
            <li>分类列表1</li><li>分类列表3</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li>
            <li>分类列表1</li><li>分类列表4</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li>
            <li>分类列表1</li><li>分类列表5</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li>
            <li>分类列表1</li><li>分类列表6</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li>
            <li>分类列表1</li><li>分类列表7</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li>
            <li>分类列表1</li><li>分类列表8</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li>
            <li>分类列表1</li><li>分类列表9</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li>
            <li>分类列表1</li><li>分类列表10</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li>
            <li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li>
            <li>分类列表1</li><li>分类列表2</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li>
            <li>分类列表1</li><li>分类列表3</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li>
            <li>分类列表1</li><li>分类列表4</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li>
            <li>分类列表1</li><li>分类列表5</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li>
            <li>分类列表1</li><li>分类列表6</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li>
            <li>分类列表1</li><li>分类列表7</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li>
            <li>分类列表1</li><li>分类列表8</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li>
            <li>分类列表1</li><li>分类列表9</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li>
            <li>分类列表1</li><li>分类列表10</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li><li>分类列表1</li>
        </ul>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "Category",
        data() {
            return {
                scroll: null
            }
        },
        //组件创建完之后调用
        /*created() {
            console.log(this.$refs.aaa);
            console.log(document.querySelector('.wrapper'));
            this.scroll = new BScroll('.wrapper', {
            })
        },*/
        mounted() {
            this.scroll = new BScroll(this.$refs.aaa, {
                probeType: 3,  //监听滚动的实时坐标
                pullUpLoad: true,
                click: true
            })

            //监听滚动的实时坐标
            this.scroll.on('scroll', (position) => {
                console.log(position);
            })

            this.scroll.on('pullingUp', () => {
                console.log('上拉加载更多');
            })
        },
        methods: {
            btnClick() {
                console.log('btnClick');
            },
            divClick() {
                console.log('divClick');
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        background-color: red;
        height: 150px;

        overflow: hidden;
        /*overflow-y: scroll;*/
    }
</style>