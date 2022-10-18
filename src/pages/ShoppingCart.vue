<template>
    <div>
        <NavBar />
        <Slide />
        <div class="shoppingCart">
            <table>
                <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>delete</th>
                </tr>
                <tr v-for="(c, index) in cartList" :key="index">
                    <td>{{c.name}}</td>
                    <td>{{c.price}}</td>
                    <td>1</td>
                    <td class="deleetBtn" @click="deleteProduct(c.id)">X</td>
                </tr>
                
                
            </table>
        </div>
        <br>
        <div class="totalPrice">
            <p>Total Price</p>
            <p>{{SumPrice}}</p>
        </div>
        <br>
        <router-link to="/checkout">
            <button class="checkBtn">Checkout</button>
        </router-link>
        
        <!-- <div>
            <div></div>
            <div v-for="(c, index) in cartList" :key="index">
                <p>{{c.name}}</p>
                <p>1</p>
                <p>{{c.price}}</p>
            </div>
        </div> -->
        <Chest />
        <MyFooter />
    </div>
</template>

<script>
    import NavBar from '../components/NavBar'
    import Slide from '../components/Slide'
    import MyFooter from '../components/MyFooter'
    import Chest from '../components/Chest'
    import {mapState, mapGetters} from 'vuex'

    export default {
        name:'ShoppingCart',
        components:{
            NavBar,
            Slide,
            MyFooter,
            Chest
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
        methods:{
            deleteProduct(id){
                // console.log(id)
                this.$store.commit('DELETE_PRODUCT', id)
                this.$bus.$emit('DeleteCart', id)
            },
        }
    }
</script>

<style scoped>
    table{
        width: 100%;
        margin: auto;
    }
    th{
        background-color:rgb(146, 60, 60);
    }
    td, th{
        border: 1px solid rgba(216, 216, 216, 0.3);
        color: rgba(255, 255, 255, 0.897);
        padding: 10px;
    }
    .shoppingCart{
        min-height: 140px;
    }
    .totalPrice{
        color:#fff;
        /* text-align: right;
        margin-right: 20px; */
    }
    .checkBtn{
        color: #fff;
        background-color: rgb(146, 60, 60);
        height: 50px;
        margin-bottom: 60px;
    }
    .deleetBtn{
        padding: -40px;
    }


    @media screen and (min-width:768px) {
        .shoppingCart{
            width: 1080px;
            margin: auto;
        }
    }
</style>