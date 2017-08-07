<template>
    <div>
        <Card v-for="aa in shuju" :data="aa"></Card>
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
    	shuju:header_data.data
    }
    },
}
</script>