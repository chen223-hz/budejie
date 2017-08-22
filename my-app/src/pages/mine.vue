<template>
<div>
    <div><button> 登录</button></div>
    <div><button> 登录</button></div>
    <div><button> 登录</button></div>
    <div><button> 登录</button></div>
    <div><button> 登录</button></div>
    <div><button> 登录</button></div>
    <div><button> 登录</button></div>
    <div><button> 登录</button></div>
    <div><button> 登录</button></div>
    <div><button> 登录</button></div>
    <div><button> 登录</button></div>
    <p v-show="showTishi">{{tishi}}</p>
    <input type="text" placeholder="请输入用户名" v-model="username">
    <input type="password" placeholder="请输入密码" v-model="password">
    <div><button @click="login"> 登录</button></div>
    <div><button @click="logout"> 注销</button></div>
</div>
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