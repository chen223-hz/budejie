<template>
<div >   
    <f7-navbar title="Tabs"></f7-navbar>
    <f7-toolbar tabbar tabbar-scrollable>
            <f7-buttons>
                <f7-button v-for="(item,index) in items"  :class="item.classname" :text="item.text" :key="item.id" @click = "btn(index)">{{index}}</f7-button>
            </f7-buttons>
    </f7-toolbar>
    <f7-page  infinite-scroll >
        <div class="content-block">
                <Card v-for="card in cards" :data="card" :key="card.id" @card:content-click="routeToPost"></Card>
                <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
                    <span slot="no-more">
                        There is no more Hacker News :(
                    </span>
                </infinite-loading>
        </div>
    </f7-page>
</div>
</template>
<script>
    import Card from '../component/card.vue'
    import header_data from '../json/header_data.json'
    import items from '../json/button_title.json'
    import { bus } from '../js/bus.js'
    import InfiniteLoading from 'vue-infinite-loading'
    import axios from 'axios';
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
                this.$f7.mainView.router.load({url: `/post/?avatar=${data.avatar}&username=${data.username}&userdate=${data.userdate}&text=${data.text}`})
                console.log(data)
            },
            getData(){
                    this.items = items.data
            },
            btn(index){
                bus.$emit('qq',index)
            },
            onInfinite(){
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
            this.$http.get('http://192.168.88.245:8000/text/').then(response => {
                this.cards = response.data.data;
            }, response => {
            // error callback
            }),
            this.getData()
        }
    }
</script>