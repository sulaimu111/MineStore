import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions={

}

const mutations={
    
}

const state={
    productList:[
        {'id':'001', name:'木稿', location:'/products_img/Wooden_Pickaxe.webp'},
        {'id':'002', name:'石稿', location:'/products_img/Stone_Pickaxe.webp'},
        {'id':'003', name:'鐵稿', location:'/products_img/IronPickaxe.webp'},
        {'id':'004', name:'金稿', location:'/products_img/Golden_Pickaxe.webp'},
        {'id':'005', name:'鑽稿', location:'/products_img/Diamond_Pickaxe.webp'},
        {'id':'006', name:'木稿', location:'/products_img/Wooden_Pickaxe.webp'},
        {'id':'007', name:'石稿', location:'/products_img/Stone_Pickaxe.webp'},
        {'id':'008', name:'鐵稿', location:'/products_img/IronPickaxe.webp'},
        {'id':'009', name:'金稿', location:'/products_img/Golden_Pickaxe.webp'},
        {'id':'010', name:'鑽稿', location:'/products_img/Diamond_Pickaxe.webp'},
    ]
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})