<template>
    <f7-card >
    <f7-link @click="contentclick">
        <f7-card-header>
            <div class="avatar">
                <img width="34" height="34">
            </div>
            <div class="username"></div>
            <div class="userdate"></div>
        </f7-card-header>
        <f7-card-content class="text">
          
        </f7-card-content>
        <f7-card-footer>
            <f7-link @click="dianzan">
                <span class="iconfont icon-iconlikenum" ></span>
                <span id="zan">赞</span>
            </f7-link> 
            <f7-link> 
                <span class="iconfont icon-buxihuan"></span>
                <span>踩</span>
            </f7-link> 
            <f7-link>
                <span class="iconfont icon-pinglun"></span>
                <span>评论</span>
            </f7-link> 
            <f7-link>
                <span class="iconfont icon-fenxiang"></span>
                <span >分享</span>
            </f7-link>                                  
        </f7-card-footer>
        <f7-card-content>
           <div><span class="commentname"></span></div> 
        </f7-card-content>
    </f7-link>
    </f7-card>
</template>
<script>

    export default{
        props: ['data'],
        data(){
            return {}
        },
        methods:{
            dianzan(){
                var zan = document.getElementById('zan');
                 var self = this;
                if(zan.innerHTML == "赞"){
                    zan.innerHTML = "已赞";
                }else{
                    zan.innerHTML = "赞";
                }
            },
            contentclick(){
                this.$f7.mainView.router.load({url:'/post/'});
             }

        },
        mounted(){
    }
    }
</script>
<style scoped>
    .card-header{
        display:block;
    }
    .avatar{
        float:left;
    }
    .username{
        margin-left:44px;
        font-size:14px;
        font-weight:500;
    }
    .userdate{
        margin-left:44px;
        font-size:13px;
        color:#8e8e93;
    }
</style>