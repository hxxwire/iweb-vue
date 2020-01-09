<template>
  <b-container >
   <div class='w-50 mx-auto'>
    <b-form >
      <b-form-group
      id='unameGroup'
        label='用户名'
         description="顶顶顶"
      >
        <b-form-input
          id="uname"
          v-model="form.uname"
           required
          placeholder='请输入用户名'
          @blur="checkName"
        >
        </b-form-input>
      </b-form-group>
    </b-form >
       <b-form>
      <b-form-group
        id='phoneGroup'
        label='请输入手机号'
      >
        <b-form-input
          id="phone"
          v-model="form.phone"
          required
          placeholder='请输入'

        @blur='checkPhone'

        >
        </b-form-input>
      </b-form-group>
    </b-form>
    <!-- 密码 -->
     <b-form>
      <b-form-group
        label='请输入密码'
        required

      >
        <b-form-input
          id="upwd"
          v-model="form.upwd"
          type='password'
          required
          placeholder='请输入密码'
        >
        </b-form-input>
      </b-form-group>
    </b-form>

 <b-form>
      <b-form-group
      v-model="form.upwd2"
        label='请再次输入密码'

      >
        <b-form-input
          id="upwd2"
          type='password'
          v-model="form.upwd2"
          placeholder='请输入密码2'
        >
        </b-form-input>
      </b-form-group>
    </b-form>

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="请输入邮箱"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="请输入邮箱"
        ></b-form-input>
      </b-form-group> 

      <!-- <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group> -->

      <b-button type="submit" variant="primary">提交t</b-button>
      <b-button type="reset" variant="danger">重置</b-button>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
    </div>
  </b-container>
</template>

<script>
import qs from 'qs'
  export default {
      name:'Register',
    data() {
      return {
        form: {
          email: '',
          uname: '',
          upwd:'',
          upwd2:'',
          // food: null,
          // checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      //校验手机号
      checkName(){
          this.axios.post('user/check_uname',qs.stringify({uname:this.form.uname})).then(res=>{
            console.log(this.form.uname)
            if(res.data.code==300){
                unameGroup.description='用户名已存在'
              // alert('用户名已经存在')
              // uname.value=''
              uname.focus()
              return
            }else{

            }
          }).catch(err=>{
            console.log(err)
          })
      },
       checkPhone(){
        var phoneReg=/^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/
        if(!phoneReg.test(this.form.phone)){
            phoneGroup.label='手机号格式不对'
            console.log('aaaa手机号格式不对')
        }else{
          this.axios.post('user/check_phone',qs.stringify({phone:this.form.phone})).then(res=>{
            console.log(res)
            if(res.data.code==300){
              alert('手机号已经存在')
            }else{
              
            }
          }).catch(err=>{
            console.log(err)
          })
        }
      },
      getReg(){
        this.axios.post('/user/register',qs.stringify(this.form)).then(res=>{
          console.log(res)
          if(res.data.code==200){
            // sessionStorage.uid=res.data.data.uid
            // sessionStorage.uname=res.data.data.uname
            alert('恭喜你注册成功')
            location.reload()
            history.back();
            // history.go(-1)
          }
        }).catch(err=>{
          console.log(err)
        })
      },
      onSubmit(evt) {
        evt.preventDefault()
        // alert(JSON.stringify(this.form))
        this.checkPhone()
        this.getReg()

      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.uname = ''
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
    mounted(){
    }
  }
</script>