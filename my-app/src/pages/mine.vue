<template>
    <div class="">
        <f7-navbar  title="我的" sliding>   
        </f7-navbar>
        <f7-block>
            <f7-link  @click=" openPopup">
                <div class="content-block-title"><img src="">登录/注册</div>
            </f7-link>
            <f7-grid > 
                <mine-iconbtn v-for="mine in mine" :title="mine.title"  :href="mine.href" width="20"></mine-iconbtn>                 
            </f7-grid>
            <f7-grid > 
                <mine-iconbtn v-for="mine in mine" :title="mine.title"  :href="mine.href" width="20"></mine-iconbtn>                 
            </f7-grid>
            <f7-link href="/about/">
                <div class="content-block-title">败家姐<i class="iconfont icon-xiangyou"></i></div>
            </f7-link>
        </f7-block>
    </div>
</template>
<script>
    import MineIconbtn from '../component/mine_iconbtn.vue'
    import mine from '../json/mine.json'
    export default{
        components:{
            'mine-iconbtn': MineIconbtn
        },
        data(){
            return{
                mine: []
            }
        },
        methods:{
            getData(){
                this.mine = mine.data
            },
            openPopup() {
                this.$f7.popup('#popup')
            },
        },
        mounted (){
            this.getData()
        }
    }
</script>
<style scoped>
    .content-block{
        padding:0px;
        margin:0px;
    }
    .content-block-title{
        background:#fff;
        margin:10px 0;
        padding:10px;
    }
    .row{
        background:#fff;
        padding:10px;
    }
    .icon-xiangyou{
        float:right;
    }
    img{
        width:20px;
        height:20px;
    }
</style>