<template>
    <div class="">
         <f7-navbar>   
            <f7-searchbar cancel-link="Cancel" placeholder="Search in items" :clear="true"></f7-searchbar>
        </f7-navbar>
        <f7-block>
                <f7-list media-list>
                    <f7-list-group group>
                        <f7-list-item  v-for="club in clubs " 
                            :link  = "club.link"
                            :src="img"
                            :title = "club.tilte" 
                            :after = "club.after"  :key="club.id">  
                            
                        </f7-list-item>
                    </f7-list-group>
                </f7-list>
        </f7-block>
    </div>
</template>
<script>
import clubs from '../json/club.json'
    export default{
        props:['title','after','media','img'],
        data(){
            return{
                clubs: []
            }
        },
        methods:{
            getData(){
                this.clubs = clubs.data
            }
        },
        mounted (){
                this.getData()
            
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
</style>