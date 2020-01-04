<template>
    <b-container class=' px-0'>
        <Carousel></Carousel>
        <HomeCourse></HomeCourse>
     
    </b-container>
</template>

<script>
import Carousel from "../components/Carousel"
import HomeCourse from "../components/HomeCourse"
export default {
    name:'Home',
    components:{Carousel,HomeCourse}
}
</script>

<style lang="">
    
</style>