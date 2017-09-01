<template>
<div >   
    <f7-navbar title="Tabs"></f7-navbar>
    <f7-toolbar tabbar tabbar-scrollable>
            <f7-buttons>
                <f7-button v-for="(item,index) in items"  :class="item.classname" :text="item.text" :key="item.id" @click = "btn(index)">{{index}}</f7-button>
            </f7-buttons>
    </f7-toolbar>
   
        <div class="content-block">
                <Card v-for="card in cards" :data="card" :key="card.id" @card:content-click="routeToPost"></Card>
        </div>
    
</div>
</template>
<script>
    import Card from '../component/card.vue'
    import header_data from '../json/header_data.json'
    import items from '../json/button_title.json'
    import { bus } from '../js/bus.js'
    export default{
        props:['text','classname'],
        components:{
            Card
        },
        data(){
            return{
                cards:'',
                items:[],
            }
        },
        methods: {
            routeToPost(data) {
                this.$f7.mainView.router.load({url: `/post/?avatar=${data.avatar}&username=${data.username}&userdate=${data.userdate}&text=${data.text}`})
            },
            getData(){
                    this.items = items.data
                },
            btn(index){
                bus.$emit('qq',index)
            }
            
        },
        mounted(){
            var cards
            this.$http.get('http://10.1.0.17:8000/text/').then(response => {
                this.cards = response.data.data;
            }, response => {
            // error callback
        }),
            this.getData()
        }
    }
</script>