<template>
  <b-container>
      <b-row>
          <b-col cols='6'>
              <img :src="require(`../assets/images/${data.pic}`)" alt="">
          </b-col>
           <b-col cols='6'>
               <h3>{{data.title}}</h3>
               <div>
                   <p>讲师：{{data.tname}}</p>
                   <p>课时{{data.clength}}</p>
                   <p>{{data.startTime}}</p>
                   <p>上课地点：{{data.address}}</p>
               </div>
               <div>
                   <p>课程价格：{{data.price}}</p>
                   <button> 加入购物车</button>加入收藏
               </div>
          </b-col>
      </b-row>
      <div v-html='data.details' style="text-indent:32px"> 

      </div>
  </b-container>
</template>

<script>
export default {
    name:'CourseDetail',
    data(){
        return {
            data:{},
            cid:0

        }
        
    },
    methods:{
        getDetail(){
            this.axios.get('/course/detail',{
            params:{
                cid:this.cid
            }
        }).then(res=>{
            console.log(res)
            this.data=res.data.data

        }).catch(err=>{
            console.log(err)
        })
        }
    },
    mounted(){
        this.cid=this.$route.query.cid
        this.getDetail()
    }
}
</script>

<style>

</style>