<template>
    <div>
        <img src="../assets/img1.jpg" alt="">
    </div>
</template>

<script>
    export default {
        name:'Slide',
    }
</script>

<style scoped>
    img{
        width: 100%;
    }
    @media screen and (min-width:768px){
        img{
            height: 400px;
            width: auto;
            margin-bottom: 30px;
        }
    }
</style>