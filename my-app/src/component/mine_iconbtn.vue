<template>
    <f7-col :width="width">
        <f7-link :href="link">
            <div class="iconbtn">
                <img :src="href" width="25" height="25">
                <div>{{title}}</div>
            </div>
        </f7-link>
    </f7-col>
</template>
<script>
    export default{
        props:['title','img','href','width']
    }
</script>
<style>
    .iconbtn{
        text-align:center;
    }
</style>