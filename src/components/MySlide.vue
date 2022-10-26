<template>
    <div>
        <img src="../assets/img1.jpg" alt="">
        
    </div>

</template>

<script>
    // import { Carousel, Slide } from 'vue-carousel';
    

    export default {
        name:'Slide',
        // components: {
        //     Carousel,
        //     Slide
        // },
        data() {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart(slide) {
                this.sliding = true
            },
            onSlideEnd(slide) {
                this.sliding = true
            }
        }
    }
</script>

<style scoped>
    img{
        height: 200px;
        max-width: 90%;
    }
    /* .el-carousel__item{
        height: 200px;
    } */
    .row{
        /* height: 200px; */
        margin: 0 auto;
    }
    @media screen and (min-width:768px){
        img{
            height: 400px;
        }
        
    }
</style>