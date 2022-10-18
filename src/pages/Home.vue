<template>
    <div>
        <div class="wrap">
            <NavBar />
            <Slide />
            <br>
            <h1 style="color:#fff">Home still under construction...</h1>
            <Chest />
            <div class="main-win"></div>
        </div>
        <MyFooter />
    </div>
</template>

<script>
    import NavBar from '../components/NavBar'
    import Slide from '../components/Slide'
    import Chest from '../components/Chest'
    import MyFooter from '../components/MyFooter'

    export default {
        name:'Home',
        components:{
            NavBar,
            Slide,
            Chest,
            MyFooter
        }
    }
</script>

<style>
    *{
        background-color: #000;
        margin: 0;
    }
    /* .wrap{
        display: flex; flex-direction: column;
        height: 100%; padding: 0;
    } */
    .wrap {
        min-height: 580px;
    }
</style>