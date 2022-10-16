<template>
    <div class="row">
        <NavBar />
        <Slide />
        <!-- <ul>
            <li v-for="p in productList" :key="p.id">{{p.name}}</li>
        </ul> -->
        <div class="productSort">
            <nav>
                <router-link active-class="active" to="/products/fullproducts">Full</router-link>
                <router-link to="/products">Pickaxe</router-link>
                <router-link to="/product">Sword</router-link>
                <router-link to="/Contact">Others</router-link>
            </nav>
            <router-view></router-view>
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
        name:'Products',
        components:{
            NavBar,
            Slide,
            MyFooter,
            Chest
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
    }
</style>