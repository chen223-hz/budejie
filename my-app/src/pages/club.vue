<template>
    <div class="">
         <f7-navbar>   
            <f7-searchbar cancel-link="Cancel" placeholder="Search in items" :clear="true"></f7-searchbar>
        </f7-navbar>
        <f7-block>
                <f7-list media-list>
                    <ul>
                        <clubList v-for="(club, index) in clubs" :title="club.title" :img="club.img" :text="club.text" :href="club.link"  ></clubList>
                    </ul>
                </f7-list>
        </f7-block>
    </div>
</template>
<script>
import clubs from '../json/club.json'
import clubList from '../component/club_list.vue'
    export default{
        props:['href','text','img','title'],
        data(){
            return{
                clubs:''
            }
        },
        methods:{
            getData(){
                this.clubs = clubs.data
            }
        },
        mounted (){
                this.getData()
            
        },
        components:{
            clubList
        }
    }
</script>
<style>
    .navbar-inner{
        padding:0px;
    }
    .list-block{
        margin:10px 0;
    }
    .list-block.media-list .item-title{
        font-weight: 400!important;
    }
</style>