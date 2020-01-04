<template>
  <b-container>
      <b-row class='my-5' v-for="(item,i) of info " :key="i">
          <b-col lg='2' md='3' sm='4'>
           
            <img :src="require(`../assets/images/${item.tpic}`)" alt="">  
          </b-col >
          <b-col lg='10'  md='9' sm='8' >
              <h3 >
                <span>{{item.tname}}</span>
                <span>{{item.maincourse}}</span>
              </h3>
              <div>
                 <span>工作经历</span>
                 <p>{{item.experience}}</p>
              </div>
              <div>
                <span>授课风格</span>
                <p>{{item.style}}</p>
              </div>
          </b-col>
      </b-row> 
  </b-container>
</template>
<script>
// console.log(axios)
export default {
    name:"Teacher",
    data(){
      return {
        info:{},
      }
    },
    methods:{
      getTeachers(){
        //调用教师接口
        this.axios.get('/teacher/list').then(res=>{
         this.info=res.data.data
         
        
        }).catch(err=>{ 
          console.log(err)
        })
      }
    },
    mounted(){
      //组件挂载时，调用getTeachers()
      this.getTeachers()
    }
}
</script>

<style>

</style>