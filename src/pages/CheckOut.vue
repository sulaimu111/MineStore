<template>
    <div>
        <NavBar />
        <Slide />
        <div class="thankText">
            <h1>Total price is <span>${{SumPrice}}</span>.</h1>
            <br>
            <h1>Thank you for your purchase.</h1>
            <br>
            <h1>We will quickly process your orders.</h1>
        </div>
        
        <MyFooter />
    </div>
</template>

<script>
    import NavBar from '../components/NavBar'
    import Slide from '../components/Slide'
    import MyFooter from '../components/MyFooter'
    import {mapState} from 'vuex'

    export default {
        name:'CheckOut',
        components:{
            NavBar,
            Slide,
            MyFooter,
        },
        computed:{
            ...mapState(['productList', 'cartList']),
            // ...mapGetters(['SumPrice']),
            SumPrice(){
                let i = 0
                this.cartList.forEach((item)=>{
                    i += Number(item.price)
                })
                return i
            }
        },
        mounted(){
            this.$bus.$emit('ClearCart')
        }
    }
</script>

<style>

    .thankText{
        text-align: left;
        margin: 20px 0 0 20px;
        color: #fff;
    }
    .thankText span{
        color:red;
    }

    @media screen and (min-width:768px) {
        .thankText{
            text-align: center;
        }
        
    }
</style>