import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Products from '../pages/Products'
import FullProducts from '../pages/FullProducts'
import ShoppingCart from '../pages/ShoppingCart'

export default new VueRouter({
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
                }
            ]
        },
        {
            path:'/shoppingcart',
            component:ShoppingCart
        }
    ]
})