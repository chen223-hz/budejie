<template>
    <f7-popup id="popup">
      <f7-view navbar-fixed>
        <f7-pages>
          <f7-page>
            <f7-navbar title="登录">
              <f7-nav-right>
                <f7-link close-popup>取消</f7-link>
              </f7-nav-right>
            </f7-navbar>
            <f7-block>
              <f7-button>微信登录</f7-button>
              <f7-button>QQ登录</f7-button>              
            </f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-popup>
</template>
<script>
    export default{
        data(){
            return{
                
            }
        }
    }
</script>
<style>
    .button{
        margin:20px 0;
    }
</style>