<template>
    <div>
        <div class="wrap">
            <NavBar />
            <!-- <MySlide /> -->
            <carousel
                :perPage="1"
                :autoplay="true"
                :autoplayTimeout="3000"
                :navigationEnabled="false"
                :navigationColor="'#fff'"
                :navigationPrevLabel="`<span style='color:#fff;font-size:60px;'>◀</span>`"
                :navigationNextLabel="`<span style='color:#fff;font-size:60px;'>▶</span>`"
                :paginationActiveColor="'skyblue'"
                :scrollPerPage="true">
                <slide>
                    <img class="slideImg" src="../assets/img1.jpg" alt="">
                </slide>
                <slide>
                    <img class="slideImg" src="../assets/img2.jpg" alt="">
                </slide>
                <slide>
                    <img class="slideImg" src="../assets/img3.jpg" alt="">
                </slide>
                <slide>
                    <img class="slideImg" src="../assets/img4.jpg" alt="">
                </slide>
                <slide>
                    <img class="slideImg" src="../assets/img5.jpg" alt="">
                </slide>
            </carousel>
            <br>
            <h1 style="color:#fff">Welcome to Minecraft store.</h1>
            <h1 style="color:#fff">Please go to product page to shop.</h1>
            <Chest />
            <div class="main-win"></div>
        </div>
        <MyFooter />
    </div>
</template>

<script>
    import NavBar from '../components/NavBar'
    import MySlide from '../components/MySlide'
    import Chest from '../components/Chest'
    import MyFooter from '../components/MyFooter'

    export default {
        name:'Home',
        components:{
            NavBar,
            MySlide,
            Chest,
            MyFooter,
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
    .slideImg{
        height: 200px;
    }
    
    @media screen and (min-width:768px) {
        .slideImg{
            height: 400px;
        }
        .wrap {
        min-height: 800px;
    }
    }
</style>