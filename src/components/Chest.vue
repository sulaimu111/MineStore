<template>
    <div class="cart" @click="cart">
        <img src="../assets/products_img/Chest.webp" alt="">
    </div>
</template>

<script>
    export default {
        name:'Chest',
        methods:{
            cart(){
                console.log('cart')
            }
        }
    }
</script>

<style scoped>

    img{
        width: 100px;
        background: url('../assets/products_img/Chest.webp') no-repeat;
        position: fixed;
        right: 0px;
        bottom: 15px;
        background: none;
        transition: .5s;
    }

    @media screen and (min-width:768px) {
        img{
            width: 150px;
            right: 20px;
            bottom: 20px;
        }
    }
</style>