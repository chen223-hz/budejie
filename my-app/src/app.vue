<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal layout="dark">
      <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar v-if="$theme.ios" title="Left Panel" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-navbar v-if="$theme.material" title="Left Panel" sliding></f7-navbar>
            <f7-block inner>
              <p>Left panel content goes here</p>
            </f7-block>
            <f7-block-title>Load page in panel</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About"></f7-list-item>
              <f7-list-item link="/form/" title="Form"></f7-list-item>
            </f7-list>
            <f7-block-title>Load page in main view</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item link="/form/" title="Form" link-view="#main-view" link-close-panel></f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Right Panel -->
    <f7-panel right cover layout="dark">
      <f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar v-if="$theme.ios" title="Right Panel" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-navbar v-if="$theme.material" title="Right Panel" sliding></f7-navbar>
            <f7-block>
              <p>Right panel content goes here</p>
            </f7-block>
            <f7-block-title>Load page in panel</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About"></f7-list-item>
              <f7-list-item link="/form/" title="Form"></f7-list-item>
            </f7-list>
            <f7-block-title>Load page in main view</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item link="/form/" title="Form" link-view="#main-view" link-close-panel></f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" main>
        <f7-pages>
          <f7-page>
            <f7-toolbar tabbar labels>
              <f7-link icon="iconfont icon-jinghua" text="精华" tab-link="#tab1"></f7-link>
              <f7-link icon="iconfont icon-zuixinjiexiao" text="最新" tab-link="#tab2" active></f7-link>
              <f7-link icon="iconfont icon-bi" @click="openloginPopup"></f7-link>
              <f7-link icon="iconfont icon-shequdibuhuifu" text="社区" tab-link="#tab3"  ></f7-link>
              <f7-link icon="iconfont icon-wode" text="我" tab-link="#tab7"></f7-link>
            </f7-toolbar>
            <f7-tabs>
              <f7-tab id="tab1">
                  <essence></essence>
              </f7-tab>
              <f7-tab id="tab2" active>
                  <news></news>
              </f7-tab>
              <f7-tab id="tab3">
                  <club></club>
              </f7-tab>
              <f7-tab id="tab7">
                  <mine></mine>
              </f7-tab>
            </f7-tabs>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
    <!-- popup -->
    <popup></popup>
    <loginPopup></loginPopup>
  </div>
</template>

<script>
import  essence from './pages/essence.vue'
import  news from './pages/new.vue'
import  club from './pages/club.vue'
import  mine from './pages/mine.vue'
import  popup from './component/popup.vue'
import  loginPopup from './component/loginPopup.vue'
export default {
  
  components:{
    'essence' : essence,
    'club': club,
    'news': news,
    'mine': mine,
    'popup' : popup,
    'loginPopup' : loginPopup 
  },
  methods:{
    openloginPopup() {
                this.$f7.popup('#loginPopup')
            }
  }
}
</script>
<style>
    .content-block{
       padding:0;
       margin:0px;
    }
</style>