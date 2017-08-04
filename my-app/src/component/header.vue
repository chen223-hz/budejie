<template>
    <f7-card-header>
            <div class="avatar">
                <img :src="img" width="34" height="34">
            </div>
            <div class="username">{{data.username}}</div>
            <div class="userdate">{{data.userdate}}</div>
    </f7-card-header>
</template>
<script>
    export default{
        props:['img','name','data']
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
    .date{
        margin-left:44px;
        font-size:13px;
        color:#8e8e93;
    }
</style>