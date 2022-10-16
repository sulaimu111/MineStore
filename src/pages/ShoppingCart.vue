<template>
    <div>
        <NavBar />
        <Slide />
        <table>
            <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>delete</th>
            </tr>
            <tr v-for="(c, index) in cartList" :key="index">
                <td>{{c.name}}</td>
                <td>1</td>
                <td>{{c.price}}</td>
                <td class="deleetBtn" @click="deleteProduct(c.id)">X</td>
            </tr>
        </table>
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
    import {mapState} from 'vuex'

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
        },
        methods:{
            deleteProduct(id){
                // console.log(id)
                this.$store.commit('DELETE_PRODUCT', id)
            }
        },
        mounted(){
            this.$store.commit('GET_CART')
        }
    }
</script>

<style scoped>
    table{
        width: 100%;
        margin: auto;
    }
    th{
        background-color:rgb(146, 60, 60)
    }
    td, th{
        border: 1px solid rgba(216, 216, 216, 0.3);
        color: rgba(255, 255, 255, 0.897);
        padding: 10px;
    }
</style>