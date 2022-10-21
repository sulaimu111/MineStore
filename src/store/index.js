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
        state.cartList = state.cartList.filter((product)=>{
            return product.id != id
        })
        localStorage.setItem('Cart', JSON.stringify(state.cartList))
    }
}

const getters={
    SumPrice(){
        let i = 0
        console.log('mutation中的SumPrice被調用')
        
        JSON.parse(localStorage.getItem('Cart')).forEach(item => {
            i += Number(item.price)
        });
        return i
        // console.log(state.cartList)
        // return state.cartList.forEach((item)=>{
        //     i += item.price
        //     return i
        // })
    }
}

const state={
    productList:[
        {'id':'001', name:'Wooden Pickaxe', price:'1000', location:'Wooden_Pickaxe.webp', sort:'pickaxe'},
        {'id':'002', name:'Stone Pickaxe', price:'2000', location:'Stone_Pickaxe.webp', sort:'pickaxe'},
        {'id':'003', name:'Iron Pickaxe', price:'3000', location:'Iron_Pickaxe.webp', sort:'pickaxe'},
        {'id':'004', name:'Golden Pickaxe', price:'4000', location:'Golden_Pickaxe.webp', sort:'pickaxe'},
        {'id':'005', name:'Diamond Pickaxe', price:'5000', location:'Diamond_Pickaxe.webp', sort:'pickaxe'},
        {'id':'006', name:'Wooden Sword', price:'1000', location:'Wooden_Sword.webp', sort:'sword'},
        {'id':'007', name:'Stone Sword', price:'2000', location:'Stone_Sword.webp', sort:'sword'},
        {'id':'008', name:'Iron Sword', price:'3000', location:'Iron_Sword.webp', sort:'sword'},
        {'id':'009', name:'Golden Sword', price:'4000', location:'Golden_Sword.webp', sort:'sword'},
        {'id':'010', name:'Diamond Sword', price:'5000', location:'Diamond_Sword.webp', sort:'sword'},
        {'id':'011', name:'Bottle Enchanting', price:'300', location:'Bottle_Enchanting.webp', sort:'other'},
        {'id':'012', name:'Ender Pearl', price:'72000', location:'Ender_Pearl.webp', sort:'other'},
        {'id':'013', name:'Carrot', price:'50', location:'Carrot.webp', sort:'other'},
        {'id':'014', name:'Arrow', price:'200', location:'Arrow.webp', sort:'other'},
        {'id':'015', name:'Shears', price:'150', location:'Shears.webp', sort:'other'},
        {'id':'016', name:'Bow', price:'500', location:'Bow.webp', sort:'other'},
        {'id':'017', name:'Bucket', price:'100', location:'Bucket.webp', sort:'other'}
    ],
    cartList:[]
}

export default new Vuex.Store({
    actions,
    mutations,
    getters,
    state
})