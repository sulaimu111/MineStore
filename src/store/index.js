import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions={
    getCart(context){
        console.log('getCart', context)
    }
}

const mutations={
    ADD_CART(state, productObj){
        console.log('mutation中的ADD_CART被調用', productObj)
        localStorage.setItem('Cart', JSON.stringify(productObj))
        state.cartList.unshift(productObj)
    },
    GET_CART(state){
        // console.log('Cart',JSON.parse(localStorage.getItem('Cart'))
        state.cartList = JSON.parse(localStorage.getItem('Cart'))
    },
    DELETE_PRODUCT(state, id){
        console.log('mutation中的DELETE_PRODUCT被調用', id)
    }
}

const state={
    productList:[
        {'id':'001', name:'Wooden Pickaxe', price:'1000', location:'/products_img/Wooden_Pickaxe.webp'},
        {'id':'002', name:'Stone Pickaxe', price:'2000', location:'/products_img/Stone_Pickaxe.webp'},
        {'id':'003', name:'Iron Pickaxe', price:'3000', location:'/products_img/Iron_Pickaxe.webp'},
        {'id':'004', name:'Golden Pickaxe', price:'4000', location:'/products_img/Golden_Pickaxe.webp'},
        {'id':'005', name:'Diamond Pickaxe', price:'5000', location:'/products_img/Diamond_Pickaxe.webp'},
        {'id':'006', name:'Wooden Sword', price:'1000', location:'/products_img/Wooden_Sword.webp'},
        {'id':'007', name:'Stone Sword', price:'2000', location:'/products_img/Stone_Sword.webp'},
        {'id':'008', name:'Iron Sword', price:'3000', location:'/products_img/Iron_Sword.webp'},
        {'id':'009', name:'Golden Sword', price:'4000', location:'/products_img/Golden_Sword.webp'},
        {'id':'010', name:'Diamond Sword', price:'5000', location:'/products_img/Diamond_Sword.webp'},
    ],
    cartList:[]
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})