import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Products from '../pages/Products'
import FullProducts from '../pages/FullProducts'
import ShoppingCart from '../pages/ShoppingCart'
import CheckOut from '../pages/CheckOut'
import NotFinished from '../pages/NotFinished'
import ContactUs from '../pages/ContactUs'

const router = new VueRouter({
    routes:[
        {
            path:'*',
            // redirect導向至home
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/products',
            component:Products,
            redirect:'/products/fullproducts',
            children:[
                {
                    path:'fullproducts',
                    component:FullProducts
                },
                {
                    path:'notfinished',
                    component:NotFinished
                }
            ]
        },
        {
            path:'/shoppingcart',
            component:ShoppingCart
        },
        {
            path:'/checkout',
            component:CheckOut,
            meta:{isAuth:true, title:'Checkout'}
        },
        {
            path:'/contactus',
            component:ContactUs,
            
        }
    ]
})


router.beforeEach((to, from, next)=>{
    next()
    if(to.meta.isAuth){
        if(JSON.parse(localStorage.getItem('Cart')).length == 0){
            alert("Cart can't be empty")
            router.push({path:'/shoppingcart'})
        }
        else{
            next()
        }
    }
    else{
        next()
    }
})




export default router