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
              <p v-show="showTishi">{{tishi}}</p>
              <input type="text" placeholder="请输入用户名" v-model="username">
              <input type="password" placeholder="请输入密码" v-model="password">
              <f7-button @click="login"> 登录</f7-button>
              <f7-button @click="logout"> 注销</f7-button>
              <f7-button>微信登录</f7-button>
              <f7-button>QQ登录</f7-button>              
            </f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-popup>
</template>
<script>
import {setCookie,getCookie,delCookie} from '../js/cookie.js'
    export default{
        props:{
        },
        data(){
            return {
                username: '',
                password: '',
                tishi:'',
                showTishi: false,
            }
        },
        methods:{
            login(){
                if(this.username == "" || this.password == ""){
                    alert("请输入用户名或密码")
                }else{
                    var params = new URLSearchParams();
                    params.append('username', this.username);
                    params.append('password', this.password);
                    /*接口请求*/
                    this.$http.post('http://127.0.0.1:8000/get_user/',params).then((res)=>{
                        /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
                        if(res.data.result == "error"){
                            this.tishi = "该用户不存在"
                            this.showTishi = true
                        }else if(res.data.result == "error2"){
                            this.tishi = "密码输入错误"
                            this.showTishi = true
                        }else{
                            this.tishi = "登录成功"
                            this.showTishi = true
                            setCookie('username',this.username,1000*60)
                            setTimeout(function(){
                                console.log(this.$f7.mainView.router)
                                this.$f7.mainView.router.refreshPage()
                            }.bind(this),1000)
                        }
                    })
                }
            },
            logout(){
                delCookie('username')
                this.$f7.mainView.router.refreshPage()
            }
        },
        mounted(){
            if(getCookie('username')){
                //this.$f7.mainView.router.load({url: `/mine/`})
            }
        }
    }
</script>
<style>
    .button{
        margin:20px 0;
    }
</style>