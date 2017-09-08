<template>
<div >   
        <f7-navbar title="百思不得姐"></f7-navbar>
        <f7-toolbar tabbar tabbar-scrollable>
            <f7-buttons>
                <f7-button v-for="(item,index) in items"  :class="item.classname" :text="item.text" :key="item.id" @click = "btn(index)"></f7-button>
            </f7-buttons>
        </f7-toolbar>
        <div class="content-block">
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
                cards:[],
                items:[],
                choose:'3'

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
                if(typeof(data.text) == 'string'){
                this.$f7.mainView.router.load({url: `/post/?avatar=${data.avatar}&username=${data.username}&userdate=${data.userdate}&text=${data.text}&pic=${data.pic}&type=${data.type}`})
            }else{
                this.$f7.mainView.router.load({url: `/post/?avatar=${data.avatar}&username=${data.username}&userdate=${data.userdate}&text=${JSON.stringify(data.text)}&type=${data.type}`})
            }
            },
            getData(){
                    this.items = items.data
                },
            btn(index){
                // bus.$emit('qq',index)
                if(index=='3'){
                    this.$http.get('http://10.10.11.232:8000/text/').then(response => {
                        this.cards = response.data.data;
                        this.choose = '3'
                    }, response => {
                    // error callback
                    })
                }else if(index=='1'){
                    this.$http.get('http://10.10.11.232:8000/video/').then(response => {
                        this.cards = response.data.data;
                        this.choose = '1'
                    }, response => {
                    // error callback
                    })
                }else if(index=='2'){
                    this.$http.get('http://10.10.11.232:8000/pic/').then(response => {
                        this.cards = response.data.data;
                        this.choose = '2'
                    }, response => {
                    // error callback
                    })
                }
            },
            onInfinite() {
                if(this.choose == '3'){
                this.$http.get('http://10.10.11.232:8000/text/',{params:{page:this.cards.length/20+1}}).then(response => {
                    const temp = [];
                    for (let i = 0; i < response.data.data.length; i++) {
                    temp.push(response.data.data[i]);
                    }
                    this.cards = this.cards.concat(temp);
                    this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                },response => {
                    // error callback
                })
            }else if(this.choose == '1'){
                this.$http.get('http://10.10.11.232:8000/video/',{params:{page:this.cards.length/20+1}}).then(response => {
                    const temp = [];
                    for (let i = 0; i < response.data.data.length; i++) {
                    temp.push(response.data.data[i]);
                    }
                    this.cards = this.cards.concat(temp);
                    this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                },response => {
                    // error callback
                })
            }else if(this.choose == '2'){
                this.$http.get('http://10.10.11.232:8000/pic/',{params:{page:this.cards.length/20+1}}).then(response => {
                    const temp = [];
                    for (let i = 0; i < response.data.data.length; i++) {
                    temp.push(response.data.data[i]);
                    }
                    this.cards = this.cards.concat(temp);
                    this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                },response => {
                    // error callback
                })
            }
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
    .navbar{
        position:fixed;
    }
    .tabbar{
        position:fixed;
        top:43px;
        
    }
    .toolbar:before{
        background-color:rgba(255,255,255,0);
    }
    .content-block{
        padding-top:90px;
    }
</style>