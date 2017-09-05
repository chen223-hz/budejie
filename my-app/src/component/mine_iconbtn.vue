<template>
    <f7-col :width="width">
        <f7-link>
            <div class="iconbtn">
                <i :class="'iconfont icon-'+icon" width="25" height="25"></i>
                <div>{{title}}</div>
            </div>
        </f7-link>
    </f7-col>
</template>
<script>
    export default{
        props:['title','icon','href','width']
    }
</script>
<style>
    .iconbtn{
        text-align:center;
    }
    
</style>