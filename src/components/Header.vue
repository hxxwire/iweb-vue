<template>
  
    <b-container fluid class="bg-success">
        <b-container>
            <b-navbar toggleable="sm" type="dark" variant="success">
                <b-navbar-brand :to="{name:'home'}">首页</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/course">全部课程</b-nav-item>
                    <b-nav-item :to="{name:'course',query:{curPage:1,typeId:1}}">基础课程</b-nav-item>
                    <b-nav-item :to="{name:'course',query:{curPage:1,typeId:2}}">核心课程</b-nav-item>
                    <b-nav-item :to="{name:'course',query:{curPage:1,typeId:3}}">进阶课程</b-nav-item>
                    <b-nav-item to='/teacher'>名师堂</b-nav-item>
                    <b-nav-item :to="{name:'address'}">校区</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template v-slot:button-content>
                        <em>用户</em>
                    </template>
                    <b-dropdown-item href="#">用户中心</b-dropdown-item>
                    <b-dropdown-item href="#">退出</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </b-container>
    </b-container>
</template>


<script>
export default {
    name:'Header'
}
</script>

<style>

</style>