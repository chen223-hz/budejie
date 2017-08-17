<template>
    <div>
        <Card v-for="aa in shuju" :data="aa" @click="contentclick"></Card>
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
    methods:{
         contentclick(){
                console.log(this.$f7.router);
                this.$f7.mainView.router.load({url:'/post/'});
                alert("12");
             }
    },
    mounted(){
        var shuju
        this.$http.get('http://192.168.88.245:8000/text/').then(response => {
            console.log(response)
            this.shuju = response.data.data;
      }, response => {
        // error callback
      })
    }
}
</script>