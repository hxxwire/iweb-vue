<template>
  <b-container>
      <b-row>
          <b-col cols='6'>
              <img :src="data.pic" class="img-fluid" alt="">
          </b-col>
           <b-col cols='6'>
               <h3>{{data.title}}</h3>
               <ul class='list-unstyled'>
                   <li>讲师：{{data.tname}}</li>
                   <li>课时：{{data.cLength}}</li>
                   <li>开课时间：{{data.startTime}}</li>
                   <li>上课地点：{{data.address}}</li>
               </ul>
               <div>
                   课程价格：<h2 class="text-danger d-inline-block">￥:{{data.price}}</h2>
                    <p>
                        <span id='addcart' @click="addCart" class="btn btn-warning">
                            <em>加入购物车</em>
                        </span>
                        <span class='btn bg-gray' @click="addFavorite">加入收藏</span>
                    </p> 
               </div>
          </b-col>
      </b-row>
      
      <b-row>
          <b-col cols='12'>
              <span>课程详情</span>
                <div class="details" v-html='data.details' style="text-indent:32px"> 

                </div>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
export default {
    name:'CourseDetail',
    data(){
        return {
            data:{},
            cid:this.$route.query.cid

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
            this.data.pic=require(`../assets/images/${this.data.pic}`)

        }).catch(err=>{
            console.log(err)
        })
        },
        //添加购物车
        addCart(){
            if(!this.$global.isLogin){
                this.$router.push('/login')
            }else{
                let obj ={
                    uid:sessionStorage.getItem('uid'),
                    cid:this.$route.query.cid,
                    count:1
                }
                console.log(obj)
                this.axios.post('/cart/add',this.$qs.stringify(obj)).then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        // alert('添加成功')
                        location.reload()
                    }
                }).catch(err=>{
                    console.log(err)
                })
            }
        },
        //添加收藏夹

         addFavorite(){
            if(!this.$global.isLogin){
                this.$router.push('/login')
            }else{
                let obj ={
                    uid:sessionStorage.getItem('uid'),
                    cid:this.$route.query.cid,
                   
                }
                console.log(obj)
                this.axios.post('/favorite/add',this.$qs.stringify(obj)).then(res=>{
                    console.log(res)
                    if(res.data.code==200){
                        alert('添加收藏夹成功')
                    }else if(res.data.code==201){
                        alert('课程已收藏')
                    }
                }).catch(err=>{
                    console.log(err)
                })
            }
        },

    },
    mounted(){
        this.getDetail()
    }
}
</script>

<style>

</style>