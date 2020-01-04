<template>
  <b-container class='address'>
      <b-row class='my-3'>
          <b-col lg="2">
              <div class="icon-location"></div>
          </b-col>
           <b-col lg="10">
              <div class="address_detail">
                <h3>北京中关村中心</h3>
                <p>校区地址：北京市海淀区北三环西路甲18号（大钟寺附近）中鼎大厦B座7层</p>
                <p>咨询电话：010-62130963</p>
                <p>邮编：100098</p>
              </div>
          </b-col>
      </b-row>
      <b-row class='my-3'>
          <b-col lg="2">
                <em class="icon-location"></em>
          </b-col>
           <b-col lg="10">
            <div class="address_detail">
                <h3>北京天坛中心</h3>
                <p>校区地址：北京市崇文区珠市口东大街6号珍贝大厦西侧3层达内科技</p>
                <p>咨询电话：010-67028668</p>
                <p>邮编：100050</p>
           </div>
          </b-col>
      </b-row>
      <b-row class='my-3'>
          <b-col lg="2">
                <em class="icon-location"></em>
          </b-col>
           <b-col lg="10">
            <div class="address_detail">
                <h3>北京广渠门中心</h3>
                <p>校区地址：北京市东城区广渠门东广渠家园25号楼启达大厦一层</p>
                <p>咨询电话：15321130620</p>
                <p>邮编：100010</p>
            </div>
          </b-col>
      </b-row>
      <b-row class='my-3'>
          <b-col lg="2">
                <em class="icon-location"></em>
          </b-col>
           <b-col lg="10">
            <div class="address_detail">
                <h3>北京北京清华园中心</h3>
                <p>校区地址：北京市海淀区花园路小关街120号万盛商务会馆A区三层</p>
                <p>咨询电话：010-82676916</p>
                <p>邮编：100088</p>
             </div>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
export default {
    name:'Address'
}
</script>

<style>
.row,.row+.row{
    border-bottom: 1px solid #ddd;
    /* display: hide; */

}
.address>b-row {
    padding: 30px 0;
    border-bottom: 1px dotted #ccc;
}
.address>section:last-child {
    border-bottom: none;
}
.address .icon-location {
    float: left;
    width: 31px;
    height: 47px;
    background: url(../assets/images/iconlist.png) no-repeat 0 -530px;
    margin: 43px 72px 0;
}
.address_detail {
    float: left;
    width: 580px;
}
.address_detail>h3 {
    font-size: 18px;
    font-weight: lighter;
    margin-bottom: 10px;
}
.address_detail>p {
    font-size: 14px;
    color: #999;
}

</style>