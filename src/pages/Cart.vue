<template>
    <b-container>   
        <div class="cart">
        <div class="cart_header">
            <a href="" class="cart_delete">删除</a>
            <a href="" class="cart_clear">清空购物车</a>
            <span>已选课程<em>0</em>门</span>
            <span>总金额：<strong>0.00</strong></span>
            <button type="button" class="pay">结算</button>
        </div>
        <div class="cart_con">
            <div class="cartcon_title clearfloat">
                <span><input type="checkbox" class="checkbox_all"/> 全选</span>
                <span>课程信息</span>
                <span>单价</span>
                <span>数量</span>
                <span>金额</span>
                <span>操作</span>
            </div>
            <div class="cartcon_list">
                <h2 v-show="$global.isLogin==false">请登录后查看您的购物车 <a href="login.html">去登录</a></h2>
                <h2>购物车中没有任何课程！<a href="product.html">查看全部课程</a></h2>
                <ul class='list-unstyled'>
                    <li class="clearfloat">
                        <span><input type="checkbox" class="cart_checkbox"/></span>
                        <a href="" class="cart_img"><img src="~@/assets/images/img-course/01.png" alt=""/></a>
                         <router-link :to="{name:'course_detail',query:{cid:item.courseId}}">{{item.title}}</router-link>
                        <i>¥1599</i>
                        <div>
                            <span>-</span><input type="text" value="2"/><span>+</span>
                        </div>
                        <strong>¥1599.00</strong>
                        <em></em>
                    </li>
                </ul>
            </div>
        </div>
        <div class="cart_header">
            <p><input type="checkbox" class="checkbox_all"/> 全选</p>
            <a href="" class="cart_delete">删除</a>
            <a href="" class="cart_clear">清空购物车</a>
            <span>已选课程<em>0</em>门</span>
            <span>总金额：<strong>0.00</strong></span>
            <button type="button" class="pay">结算</button>
        </div>
    </div>
    </b-container>
</template>

<script>
export default {
    name:"Cart",
    data(){
        return {

        }
    },
    methods:{
        
    },
}
</script>

<style>
/*���ﳵ*/
.cart {
    margin-top:20px;
}
.cart_header {
    text-align: right;
    font-size: 14px;
    line-height: 36px;
}
.cart_header>button{
    display: inline-block;
    vertical-align: middle;
    width: 100px;
    height: 36px;
    background: #f63;
    border:none;
    color:#fff;
    font-size: 18px;
}
.cart_header>span,.cart_header>a {
    margin-right: 10px;
    display: inline-block;
    vertical-align: middle;
}
.cart_header>span>em {
    font-style: normal;
    color:#f63;
}
.cart_header>span>strong{
    font-size: 18px;
    color:#f63;
}
.cart_header>p {
    float: left;
    width: 110px;
    text-align: center;
}
.cart_con {
    margin: 10px 0;
    font-size: 14px;
}
.cartcon_title {
    background: #eee;
    border:1px solid #ddd;
}
.cartcon_title>span {
    line-height: 33px;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
}
.cartcon_title>span:nth-child(1){
    width: 80px;
}
.cartcon_title>span:nth-child(2){
    width: 500px;
}
.cartcon_title>span:nth-child(3){
    width: 100px;
}
.cartcon_title>span:nth-child(4){
    width: 120px;
}
.cartcon_title>span:nth-child(5){
    width: 100px;
}
.cartcon_title>span:nth-child(6){
    margin-left: 15px;
}
/*���ﳵ�б�*/
.cartcon_list h2 {
    line-height: 60px;
    text-align: center;
    font-size: 18px;
    font-weight: lighter;
    border: 1px solid #ddd;
    border-top: none;
}
.cartcon_list h2 a {
    color:#f60;
}
.cartcon_list ul li {
    padding:20px 0;
    border: 1px solid #ddd;
    border-top: none;
}
.cartcon_list>ul>li>span,
.cartcon_list>ul>li>span>input,
.cartcon_list>ul>li>a,
.cartcon_list>ul>li>i,
.cartcon_list>ul>li>div,
.cartcon_list>ul>li>div>span,
.cartcon_list>ul>li>div>input,
.cartcon_list>ul>li>strong,
.cartcon_list>ul>li>em {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    font-style: normal;
}
.cartcon_list>ul>li>span {
    width: 60px;
}
.cartcon_list>ul>li>a.cart_img {
    width: 160px;
    height: 100px;
    overflow: hidden;
}
.cartcon_list>ul>li>a.cart_img img {
    max-width:100%;
}
.cartcon_list>ul>li>a.cart_title {
    width: 320px;
    margin-left: 40px;
    font-size: 18px;
    text-align: left;
}
.cartcon_list>ul>li>i {
    width: 100px;
}
.cartcon_list>ul>li>div {
    width: 120px;
}
.cartcon_list>ul>li>div>span {
    width: 20px;
    height:20px;
    background: #e8e8e8;
    line-height: 20px;
}
.cartcon_list>ul>li>div>span:hover {
    cursor: pointer;
    background: #eee;
}
.cartcon_list>ul>li>div>input {
    width: 28px;
    height:18px;
    border:1px solid #ccc;
}
.cartcon_list>ul>li>strong {
    width: 100px;
    color:#f63;
}
.cartcon_list>ul>li>em {
    margin-left: 20px;
    width: 14px;
    height: 14px;
    background:url(~@/assets/images/iconlist.png) no-repeat 0 -460px;
    cursor: pointer;
}
.cartcon_list>ul>li>em:hover {
    background-position: 0 -480px;
}
</style>