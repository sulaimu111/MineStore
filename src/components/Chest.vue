<template>
    <div class="cart" @click="cart">
        <img src="../assets/products_img/Chest.webp" alt="">
        <div class="cartNum">{{cartNum}}</div>
        <!-- <router-link :to="/shoppingcart"></router-link> -->
    </div>
</template>

<script>
    export default {
        name:'Chest',
        methods:{
            cart(){
                console.log('cart')
            }
        },
        computed:{
            cartNum(){
                return JSON.parse(localStorage.getItem('Cart')).length
            }
        }
    }
</script>

<style scoped>

    img{
        width: 100px;
        position: fixed;
        right: 0px;
        bottom: 15px;
        background: url('../assets/products_img/Chest.webp') no-repeat;
        background: none;
        transition: .5s;
    }
    .cartNum{
        width: 30px;
        height: 30px;
        position: fixed;
        right: 10px;
        bottom: 15px;
        background-color: red;
        color: #fff;
        border: 3px solid #fff;
        border-radius: 50%;
        font-size: 20px;
    }

    @media screen and (min-width:768px) {
        img{
            width: 150px;
            right: 20px;
            bottom: 20px;
        }
    }
</style>