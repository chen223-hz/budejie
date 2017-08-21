<template>
    <f7-page class="post-page" navbar-fixed toolbar-fixed>
        <f7-navbar  title="正文" back-link="返回" sliding>
        </f7-navbar>
        <Card :data="post" :enableToolbar="false"></Card>
    </f7-page>
</template>
<script>
    import Card from '../component/card.vue'
    import header_data from '../json/header_data.json'
    export default{
        components:{
            Card
        },
        data(){
            return{
                post:{}
            }
        },
        mounted() {
        var query = this.$route.query
        this.post = query
      },

    }
</script>