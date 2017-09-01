<template>
     <f7-page  navbar-fixed toolbar-fixed>
        <f7-navbar  title="正文" back-link="返回" sliding>
             <f7-card-footer>
            <f7-link>
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
        </f7-navbar>
        <div class="comments">
            <div class="title">评论</div>
            <div class="list">
                <template v-if="comments.length">
                    <div class="comment flex-row" v-for="(comment, index) in comments" :key="comment.name">
                        <div class="detail flex-rest-width">
                            <img src="" alt="">
                            <div class="name"><span>{{comment.name}}</span></div>
                            <div class="name"><span>{{comment.time}}</span></div>
                            <div class="name"><span>{{comment.text}}</span></div>                            
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
                comments: []
            }
        },
        mounted() {
            var query = this.$route.query
            this.post = query
            this.getComments()
        },
        methods:{
            getComments(){
            //     axios.get('').then(res => {
            //     this.comments = res.data
            //     })
            this.comments = comments.data 
            }
        }

    }
</script>
</template>