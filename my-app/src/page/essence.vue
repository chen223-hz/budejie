<template>
    <div>
        <Card v-for="(item,index) in card" :data="item"></Card>
    </div>
</template>
<script>
import Card from '../component/card.vue'
export default{
    components:{
        Card
    }
}
</script>