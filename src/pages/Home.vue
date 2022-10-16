<template>
    <div>
        <NavBar />
        <Slide />
        <h1 style="color:#fff">Keep Building...</h1>
        <MyFooter />
    </div>
</template>

<script>
    import NavBar from '../components/NavBar'
    import Slide from '../components/Slide'
    import MyFooter from '../components/MyFooter'

    export default {
        name:'Home',
        components:{
            NavBar,
            Slide,
            MyFooter
        }
    }
</script>

<style>
    *{
        background-color: #000;
        margin: 0;
    }
</style>