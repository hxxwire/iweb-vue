<template>
  <div class='p-4 bg-light'>
          <span>课程等级</span>                        
           <router-link :class="typeId==0 ? 'btn mx-3 btn-success':'btn mx-3'"  to='' ></router-link>
        <router-link :class="typeId==item.tpid ? 'btn mx-3 btn-success':'btn mx-3'"  :to="{name:'course',query:{curPage:1,typeId:item.tpid}}" v-for="(item,i) of list" :key='i'>{{item.tpname}}</router-link>
  </div>
</template>

<script>
export default {
    name:"TypeNav",
    data(){
        return{
            list:[],
            tpid:0,
            typeId:0
        }
    },
    methods:{
        getCourse(){
             this.axios.get('/type').then(res=>{
            this.list=res.data.data
            this.list.unshift({tpid:0,tpname:"不限"})
        }).catch(err=>{
            console.log(err)
        })
        }
       
    },
    mounted(){
        this.curPage=this.$route.query.curPage
        this.typeId=this.$route.query.typeId
        this.getCourse()
    }
}
</script>

<style>
</style>