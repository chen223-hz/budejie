<template>
    <div>
        <f7-card v-if="item.index == '1'">
            <f7-card-header>
                <div class="avatar">
                    <img width="34" height="34" :src="data.avatar">
                </div>
                <div class="username">{{data.username}}</div>
                <div class="userdate">{{data.userdate}}</div>
            </f7-card-header>
            <f7-link @click="contentclick(data)">
            <f7-card-content class="text">
                {{data.text}}
            </f7-card-content>
            </f7-link>
            <f7-card-footer v-if="enableToolbar" >
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
        </f7-card>
        <f7-card v-else>
            
        </f7-card>
    </div>
</template>
<script>
    import header_data from '../json/header_data.json'
    export default{
        props:{
            data:{
                type:Object,
                default:""
            },
            enableToolbar:{
                type:Boolean,
                default:true
            },
            index:{
                type:String,
                default:''
            }
        },
        data(){
            return {
            }
        },
        methods:{
            dianzan(){
                var zan = document.getElementById('zan');
                if(zan.innerHTML == "赞"){
                    zan.innerHTML = "已赞";
                }else{
                    zan.innerHTML = "赞";
                }
            },
            contentclick(data){
                this.$emit('card:content-click', data);
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