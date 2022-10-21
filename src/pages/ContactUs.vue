<template>
    <div>
        <NavBar />
        <MySlide />
        <div class="contact">
            <br>
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
    import MySlide from '../components/MySlide'
    import MyFooter from '../components/MyFooter'
    import Chest from '../components/Chest'

    export default {
        name:'ContactUs',
        components:{
            NavBar,
            MySlide,
            MyFooter,
            Chest
        }
    }
</script>

<style scoped>
    .contact{
        margin-bottom: 100px;
    }
    .contact h1{
        color: #fff;
    }
    .contact p{
        margin: 10px;
        color: #fff;
        
    }
</style>