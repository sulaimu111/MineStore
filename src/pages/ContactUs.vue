<template>
    <div>
        <NavBar />
        <Slide />
        <div class="contact">
            <h1>Contact Us</h1>
            <p>email: minecraft@example.com</p>
            <p>telephone: 0800-000-000</p>
        </div>
        <Chest />
        <MyFooter />
    </div>
</template>

<script>
    import NavBar from '../components/NavBar'
    import Slide from '../components/Slide'
    import MyFooter from '../components/MyFooter'
    import Chest from '../components/Chest'

    export default {
        name:'ContactUs',
        components:{
            NavBar,
            Slide,
            MyFooter,
            Chest
        }
    }
</script>

<style scoped>
    .contact h1{
        color: #fff;
    }
    .contact p{
        margin: 10px;
        color: #fff;
        
    }
</style>