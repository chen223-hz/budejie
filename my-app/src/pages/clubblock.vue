<template>
  <f7-page>
    <f7-navbar title="自拍交友" back-link="Back" sliding></f7-navbar>
    <f7-block >
      <div class="card demo-card-header-pic">
        <div style="background-image:url(http://bpic.588ku.com/back_pic/04/16/48/445825448cdf29a.jpg)" valign="bottom" class="card-header color-white no-border">
        Journey To Mountains
        <f7-button>+</f7-button>
        </div>
      </div>
      <div>
        <f7-list>
          <f7-list-item title="版规">一天不自拍难受狂魔在这里~~~</f7-list-item>
          <f7-list-item title="置顶">【自拍交友】晒自拍！赢好礼！</f7-list-item>
        </f7-list>
        <f7-list>
              <f7-list-item title="看帖"></f7-list-item>
        </f7-list>
      </div>
      <f7-grid>
        <club-block v-for="block in blocks" width="100" :data="block.text"></club-block>
      </f7-grid>
    </f7-block>
  </f7-page>
</template>

<script>
import clubBlock from '../component/club_block.vue'
//import blocks from '../json/club_content.json'
export default {
         components:{
           'club-block': clubBlock
        },
        data(){
            return{
                blocks: []
            }
        },
        methods:{
            getData(){
                this.blocks= blocks.data
            }
        },
        mounted (){
          this.$http.get('http://10.10.11.232:8000/video/').then(response => {
                this.blocks = response.data.data;
            }, response => {
            // error callback
            })
        }
}
</script>
<style scoped>
  
  .card-header{
    height:44vw;
  }
  .button{
    margin:0px;
  }
 .video-js .vjs-control-bar{
    bottom:10px!important;
  } 
  .vjs_video_20381-dimensions{
    height:240px;
  }
  
</style>