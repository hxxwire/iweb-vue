<template>
  <b-container>
      <b-row>
        <b-col md='7' sm='12'>
            <b-form class='w-50' @submit="doLogin">
                <b-form-group
                    label='请输入用户名'
                    label-for='uname'
                >
                    <b-form-input
                        id="uname"
                        v-model='form.uname'
                        placeholder='请输入用户名'
                        
                    >

                    </b-form-input>
                </b-form-group>
                <b-form-group
                    label='请输入密码'

                >
                    <b-form-input
                        id="uname"
                        v-model='form.upwd'
                        type='password'
                        
                    >

                    </b-form-input>
                </b-form-group>

                 <b-button type="submit" variant="primary">登陆</b-button>
            </b-form>
        </b-col>
        <b-col md='5' sm='12'></b-col>
      </b-row>
  </b-container>
</template>

<script>
import qs from "qs"
export default {
    name:"Login",
    data(){
        return {
            form:{
                uname:'',
                upwd:''
            }
            
        }
    },
    methods:{
        doLogin(){
            this.axios.post('user/login',qs.stringify({uname:this.form.uname,upwd:this.form.upwd})).then(res=>{
                if(res.data.code==200)
                console.log(res)
                 sessionStorage.uid=res.data.data.uid
                sessionStorage.uname=res.data.data.uname
                alert("登陆成功")
                //跳转到首页
                this.$router.push('/')
                 location.reload()

                //location.href='http://www.baidu.com'
            })
        }
    }
}
</script>

<style>

</style>