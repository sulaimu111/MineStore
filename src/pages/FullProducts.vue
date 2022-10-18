<template>
    <div class="row">
        <div class="item">
            <h1>Full Products</h1>
            <div class="productList">
                <div v-for="p in productList" :key="p.id" class="product">
                    <img :src="p.location" alt="" style="width:100px; height:100px">
                    <!-- <img src="../../public/products_img/Minecraft_cover.png" alt="" style="width:100px; height:100px"> -->
                    <p>{{p.name}}</p>
                    <p style="color:blue;">${{p.price}}</p>
                    <button>Detail</button>
                    <button class="addBtn" @click="addToCart(p)">Add to cart</button>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    import NavBar from '../components/NavBar'
    import {nanoid} from 'nanoid'

    export default {
        name:'Products',
        data(){
            return {
                CartP:[]
            }
        },
        components:{
            NavBar
        },
        computed:{
            productList(){
                return this.$store.state.productList
            }
        },
        methods:{
            addToCart(p){
                // console.log(p)
                this.CartP = {...p, id:nanoid()}
                console.log(this.CartP)
                // this.$store.commit('ADD_CART', p)
                this.$bus.$emit('AddProductToCart', this.CartP)
                this.$store.commit('ADD_CART', this.CartP)
                
            }
        },
        mounted(){
            console.log(this)
        }
    }
</script>

<style scoped>

    .product{
        width: 80%;
        background-color: #f2f3d2d5;
        border: 5px solid #3e3f43;
        border-radius: 10px;
        margin: 10px auto;
        /* text-align: center; */
    }
    .product img{
        margin-top: 10px;
    }
    .product .addBtn{
        background-color:rgb(104, 202, 179);
    }
    .row{
        
    }
    .row p{
        color: #000;
        background-color: transparent;
        font-size: 18px;
        letter-spacing: 3px;
        font-weight: bold;
    }
    .row button{
        margin: 5px 10px;
        background-color: #fff;
        font-size: 18px;
        border-radius: 5px;
    }
    .row img{
        /* width: 100%; */
        background-color: transparent;
    }
    .item{
        border: 2px solid rgba(216, 216, 216, 0.3);
        width: 340px;
        margin: 0 auto;
        border-radius: 5px;
        margin-bottom: 60px;
    }
    .item h1{
        margin-top: 10px;
        color: #fff;
    }
    
    


    @media screen and (min-width:768px) {
        .item{
            margin-top: 5px;
            padding-bottom: 15px;
            /* display: flex; */
            width: 100%;
            
        }
        .item h1{
            color: #fff;
            text-align: left;
            margin: 20px 0 10px 40px;
        }
        .productList{
            display: flex;
            flex-wrap: wrap;
            align-content:flex-start;
            margin: 0 10px;
        }
        .product{
            width: 250px;
            /* height: 250px; */
            /* background-color: yellow; */
            /* float: left; */
            padding: 0;
            margin: 10px 20px;
            /* margin: auto; */
        }
        .product .addBtn:active{
        background-color:rgb(198, 233, 225);
        }
    }
</style>