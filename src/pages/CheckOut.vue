<template>
    <div>
        <NavBar />
        <Slide />
        <div class="thankText">
            <h1>Thank you for your purchase.</h1>
            <br>
            <h1>We will quickly process your orders.</h1>
        </div>
        
        <MyFooter />
    </div>
</template>

<script>
    import NavBar from '../components/NavBar'
    import Slide from '../components/Slide'
    import MyFooter from '../components/MyFooter'

    export default {
        name:'CheckOut',
        components:{
            NavBar,
            Slide,
            MyFooter,
        },
        mounted(){
            this.$bus.$emit('ClearCart')
        }
    }
</script>

<style>

    .thankText{
        text-align: left;
        margin: 20px 0 0 20px;
        color: #fff;
    }

    @media screen and (min-width:768px) {
        .thankText{
            text-align: center;
        }
        
    }
</style>