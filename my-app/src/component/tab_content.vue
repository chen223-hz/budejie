<template>
   <f7-page-content tab id="tab4">
            <div class="content-block">
                <Card v-for="card in cards" :data="card" :key="card.id" @card:content-click="routeToPost"></Card>
            </div>
    </f7-page-content>
</template>
<script>
import Card from './card.vue'
import header_data from '../json/header_data.json'
import items from '../json/button_title.json'
export default{
    components:{
        Card
    },
    data(){
    	return{
    	cards:''
        }
    },
    methods: {
        routeToPost(data) {
            this.$f7.mainView.router.load({url: `/post/?avatar=${data.avatar}&username=${data.username}&userdate=${data.userdate}&text=${data.text}`})
            console.log(data)
        }
    },
    mounted(){
        var cards
        this.$http.get('http://192.168.88.245:8000/text/').then(response => {
            this.cards = response.data.data;
        }, response => {
        // error callback
    })
    }
}
</script>