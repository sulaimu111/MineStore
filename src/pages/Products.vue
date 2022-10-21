<template>
    <div class="row">
        <NavBar />
        <!-- <MySlide/> -->
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
        <!-- <ul>
            <li v-for="p in productList" :key="p.id">{{p.name}}</li>
        </ul> -->
        <div class="productSort">
            <nav>
                <router-link active-class="active" to="/products/fullproducts">Full</router-link>
                <router-link to="/products/pickaxe">Pickaxe</router-link>
                <router-link to="/products/sword">Sword</router-link>
                <router-link to="/products/other">Others</router-link>
            </nav>
            <router-view></router-view>
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
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        name:'Products',
        components:{
            NavBar,
            MySlide,
            MyFooter,
            Chest,
            Carousel,
            Slide
        },
        computed:{
            productList(){
                return this.$store.state.productList
            }
        },
        mounted(){
            console.log(this)
        }
    }
</script>

<style scoped>

    .productSort nav{
        /* background-color: #fff; */
        margin: 30px 0;
    }
    .productSort nav a{
        background-color: transparent;
        padding: 10px 15px;
        margin: 0 5px;
        border: 2px solid rgba(216, 216, 216, 0.3);
        border-radius: 5px;
        color: white;
        text-decoration: none;
        /* font-size: 100%; */
    }
    .VueCarousel-navigation-button {
        color: skyblue;
    }
    .slideImg{
            height: 200px;
        }


    @media screen and (min-width:768px) {
        .row{
            max-width: 1080px;
            width: 100%;
            margin: 0 auto;
        }
        .productSort{
            /* width: 1080px; */
            margin: auto;
            display: flex;
        }
        .productSort nav{
            margin-top: 0;
        }
        .productSort nav a{
            width: 80px;
            margin: 5px 20px 20px 20px;
            display: block;
            font-size: 20px;
        }
        .productSort nav a:hover{
            background: rgba(216, 216, 216, 0.3);
        }
        .slideImg{
            height: 400px;
        }
    }
</style>