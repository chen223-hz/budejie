<template>
    <f7-card>
        <f7-card-header>
            <div class="avatar">
                <img width="34" height="34">
            </div>
            <div class="username">{{card.data[0].username}}</div>
            <div class="userdate">{{card.data[0].userdate}}</div>
        </f7-card-header>
        <f7-card-content class="text">
           {{card.data[0].text}}
        </f7-card-content>
        <f7-card-footer>
            <f7-link >
                <span class="iconfont icon-iconlikenum" ></span>
                <span>赞</span>
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
           <div><span class="commentname">{{card.data[0].comment[0].commentname}}</span>{{card.data[0].comment[0].commenttext}}</div> 
        </f7-card-content>
    </f7-card>
</template>
<script>
    import header_data from '../json/header_data.json'
    export default{
        data() {
            return {
                card:header_data
            }
        },
        methods:{

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