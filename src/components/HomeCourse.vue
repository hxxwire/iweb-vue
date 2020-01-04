<template>
  <b-container>
       <h2 class="d-flex justify-content-between page-header">
           <span>最新课程</span>
           <router-link to="">更多</router-link>
       </h2>
       <div>123</div>
     <b-row>
         <b-col md='3' v-for="(item,i) in list" :key='i'>
             {{item.title}}
             <!-- <img :src="require(`../assets/images/${item.pic}`)" alt=""> -->
              
         </b-col>   
     </b-row>
  </b-container>
</template>

<script>
export default {
    name:"HomeCourse",
    data(){
        return {
            list:[],
            countNum:4
        }
    },
    methods:{

    },
    mounted(){
        this.axios.get('/course/newest',{
                params:this.countNum
        },(res)=>{
                this.list=res.data.data
                 console.log()
        }).then((err)=>{
            console.log(err)
        })
    }

}
</script>

<style>
.page-header{
    border-bottom: 2px solid #ddd;
}
</style>