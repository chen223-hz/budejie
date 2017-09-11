<template>
    <f7-page  class="post" navbar-fixed toolbar-fixed>
        <f7-navbar  title="正文" back-link="返回" sliding>
        </f7-navbar>
        <Card :data="post" :enableToolbar="false" ></Card>
        <div class="comments">
            <div class="title">评论</div>
            <div class="list">
                <template v-if="comments.length">
                    <div class="comment flex-row" v-for="(comment, index) in comments" :key="comment.name">
                        <img class="avatar" src="" alt="">
                        <div class="detail flex-rest-width">
                            <div class="name"><span>{{comment.name}}</span></div>
                            <div class="time"><span>{{comment.time}}</span></div>
                            <div class="text"><span>{{comment.text}}</span></div>                            
                        </div>
                    </div>
                </template>
                <div  v-else>
                    <i class=""></i>
                    <div class="text">
                    <span>暂时还没有评论内容</span>
                    </div>
                </div>
            </div>
        </div>
       
         <f7-toolbar tabbar labels>
            <f7-link>
                <span id="zan" class="iconfont icon-iconlikenum" >赞</span>
            </f7-link> 
            <f7-link>
                <span class="iconfont icon-buxihuan">踩</span>
            </f7-link> 
            <f7-link>
                <span class="iconfont icon-pinglun">评论</span>
            </f7-link> 
            <f7-link>
                <span class="iconfont icon-fenxiang1">分享</span>
            </f7-link>                                  
        </f7-toolbar>
    </f7-page>
</template>
<script>
    import axios from 'axios'
    import Card from '../component/card.vue'
    import comments from '../json/comments.json'
    import find from 'lodash/find'
    export default{
        components:{
            Card
        },
        data(){
            return{
                post:{
                    type:Object
                },
                comments: [],
            }
        },
        mounted() {
            var query = this.$route.query
            if(query.type == 'mp4'){
                var text = JSON.parse(query.text)
                query.text = text
            }
            this.post = query
            this.getComments()

        },
        methods:{
            getComments(){
            this.comments = comments.data
            }
        }

    }
</script>
<style >
    .post .card{
        margin:10px 0!important;
    }
    .comments{
        background-color: #fff;
        border-top: 1px solid #dadada;
        border-bottom: 1px solid #dadada;
        margin-bottom: 15px;
    }
    .comments .title{
        height: 35px;
        line-height: 35px;
        padding: 0 10px;
        font-size: 13px;
    }
    .comments .comment{
        border-top: 1px solid #dadada;
        padding: 10px;
        font-size: 14px;
    }
    .flex-row{
        display: flex !important;
        flex-direction: row;
    }
    .comments .comment .avatar{
        width: 30px;
        height: 30px;
        border-radius: 30px;
    }
    .comments .comment .detail{
        margin-left:8px;
    }
    .flex-row .flex-rest-width {
        flex: 1;
        width: initial;
    }
    .comments .comment .detail .name {
        font-size: 13px;
        color: #333;
    }
    .comments .comment .detail .time{
        font-size: 11px;
        color: #929292;
        margin-bottom: 2px;
    }
    .comments .comment .detail .text{
        line-height: 20px;
        color: #5d5d5d;
    }
    .post .card-footer{
        position:fixed;
        width:100%;
        bottom:0;
    }
    .post .iconfont{
        font-size:17px;
    }
    .post .toolbar-inner a{
        line-height:50px;
    }
</style>