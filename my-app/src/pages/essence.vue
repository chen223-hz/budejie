<template>
    <div>
        <Card v-for="aa in shuju" :data="aa" :key="aa.id" @card:content-click="routeToPost"></Card>
    </div>
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
    	shuju:'',
        }
    },
    methods: {
        routeToPost(data) {
            this.$f7.mainView.router.load({url: `/post/?avatar=${data.avatar}&username=${data.username}&userdate=${data.userdate}&text=${data.text}`})
        }
    },
    mounted(){
        var shuju
        this.$http.get('http://192.168.88.245:8000/text/').then(response => {
            this.shuju = response.data.data;
        }, response => {
        // error callback
    })
    }
}
</script>