<template>
<div >   
    <f7-navbar title="百思不得姐"></f7-navbar>
    
        <div class="content-block">
                <f7-toolbar tabbar tabbar-scrollable>
                    <f7-buttons>
                        <f7-button v-for="(item,index) in items"  :class="item.classname" :text="item.text" :key="item.id" @click = "btn(index)">{{index}}</f7-button>
                    </f7-buttons>
                </f7-toolbar>
                <Card v-for="card in cards" :data="card" :key="card.id" @card:content-click="routeToPost"></Card>
                <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
                    <span slot="no-more">
                        There is no more Hacker News :(
                    </span>
                </infinite-loading>
        </div>
</div>
</template>
<script>
    import Card from '../component/card.vue'
    import header_data from '../json/header_data.json'
    import items from '../json/button_title.json'
    // import { bus } from '../js/bus.js'
    import InfiniteLoading from 'vue-infinite-loading'
    export default{
        props:['text','classname'],
        components:{
            Card,
            InfiniteLoading,
        },
        data(){
            return{
                cards:'',
                items:[],
            }
        },
        props:{
            infiniteScroll:{
                type:Boolean,
                default:true
            }
        },
        methods: {
            routeToPost(data) {
                this.$f7.mainView.router.load({url: `/post/?avatar=${data.avatar}&username=${data.username}&userdate=${data.userdate}&text=${data.text}&type=${data.type}`})
            },
            getData(){
                    this.items = items.data
                },
            btn(index){
                // bus.$emit('qq',index)
                if(index=='1'){
                    this.$http.get('http://10.10.11.232:8000/text/').then(response => {
                        this.cards = response.data.data;
                    }, response => {
                    // error callback
                    })
                }else if(index=='2'){
                    this.$http.get('http://10.10.11.232:8000/video/').then(response => {
                        this.cards = response.data.data;
                    }, response => {
                    // error callback
                    })
                }
            },
            onInfinite() {
                setTimeout(() => {
                    const temp = [];
                    for (let i = this.items.length + 1; i <= this.items.length + 20; i++) {
                    temp.push(i);
                    }
                    this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                }, 1000);
            }
        },
        mounted(){
            var cards
            this.$http.get('http://10.10.11.232:8000/text/').then(response => {
                this.cards = response.data.data;
            }, response => {
            // error callback
            }),
            this.getData()
        }
    }
</script>
<style scoped>
    .buttons-row{
        width:100%;
    }
</style>