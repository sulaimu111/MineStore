<template>
    <div>
        <NavBar />
        <Slide />
    </div>
</template>

<script>
    import NavBar from '../components/NavBar'
    import Slide from '../components/Slide'

    export default {
        name:'Home',
        components:{
            NavBar,
            Slide,
        }
    }
</script>

<style>
    *{
        background-color: #000;
        margin: 0;
    }
</style>