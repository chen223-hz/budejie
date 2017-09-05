<template>
    <f7-popup id="loginPopup">
      <f7-view navbar-fixed>
        <f7-pages>
          <f7-page>
            <f7-block>
              <p>让生活填满精彩！</p>
              <f7-grid>
                <mine-iconbtn v-for="popup in popups" :title="popup.title"  :href="popup.href" :icon="popup.icon" width="33" :key="popup.id"></mine-iconbtn>
              </f7-grid>            
            </f7-block>
            <f7-toolbar bottom>
                <f7-link close-popup>取消</f7-link>
            </f7-toolbar>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-popup>
</template>
<script>
import MineIconbtn from '../component/mine_iconbtn.vue'
import popups from '../json/popup.json'
    export default{
            components:{
            'mine-iconbtn': MineIconbtn
        },
        data(){
            return{
                popups: []
            }
        },
        methods:{
            getData(){
                this.popups = popups.data
            }
        },
        mounted (){
            this.getData()
        }
    }
</script>
<style scoped>
    .button{
        margin:20px 0;
    }
    .row{
      text-align:center;
    }
    .row .col-33{
      margin-bottom:25px;
    }
    .close-popup{
      margin:auto;
    }
    .content-block p{
      text-align:center;
      letter-spacing:5px;
      color:#ccc;
      font-size:20px;
    }
</style>