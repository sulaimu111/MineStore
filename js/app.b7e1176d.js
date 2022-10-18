(function(){"use strict";var t={1059:function(t,e,r){var o=r(6369),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],a=(r(541),{name:"App",data(){return{Cart:JSON.parse(localStorage.getItem("Cart"))||[]}},watch:{Cart:{deep:!0,handler(t){localStorage.setItem("Cart",JSON.stringify(t))}}},methods:{AddToCart(t){console.log("product",t),this.Cart.unshift(t)},DeleteCart(t){this.Cart=this.Cart.filter((e=>e.id!=t)),console.log("APP",this.Cart)},ClearCart(){while(this.Cart.length)this.Cart.pop()}},mounted(){this.$bus.$on("AddProductToCart",this.AddToCart),this.$bus.$on("DeleteCart",this.DeleteCart),this.$bus.$on("ClearCart",this.ClearCart),console.log(this)},beforeDestroy(){this.$bus.$off("AddProductToCart"),this.$bus.$off("DeleteCart"),this.$bus.$off("ClearCart")}}),s=a,c=r(1001),l=(0,c.Z)(s,n,i,!1,null,null,null),u=l.exports,d=r(2631),p=(r(7658),function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"wrap"},[e("NavBar"),e("Slide"),e("h1",{staticStyle:{color:"#fff"}},[t._v("Keep Building...")]),e("Chest"),e("div",{staticClass:"main-win"})],1),e("MyFooter")],1)}),h=[],m=function(){var t=this,e=t._self._c;return e("div",[e("input",{attrs:{type:"checkbox",name:"",id:"menu_control"}}),e("div",{staticClass:"header"},[e("h1",{staticClass:"logo"},[e("router-link",{attrs:{to:"/home"}},[e("img",{attrs:{src:r(3953),alt:""}})])],1),t._m(0),e("nav",[e("router-link",{attrs:{to:"/home"}},[t._v("HOME")]),e("router-link",{attrs:{to:"/products"}},[t._v("PRODUCT")]),e("router-link",{attrs:{to:"/shoppingcart"}},[t._v("SHOPPING CART")]),e("router-link",{attrs:{to:"/contactus"}},[t._v("CONTACT US")])],1)])])},f=[function(){var t=this,e=t._self._c;return e("label",{staticClass:"menu_btn",attrs:{for:"menu_control"}},[e("span",[t._v("選單")])])}],_={name:"NavBar"},v=_,C=(0,c.Z)(v,m,f,!1,null,"546ad1ca",null),g=C.exports,b=function(){var t=this;t._self._c;return t._m(0)},S=[function(){var t=this,e=t._self._c;return e("div",[e("img",{attrs:{src:r(9122),alt:""}})])}],P={name:"Slide"},w=P,k=(0,c.Z)(w,b,S,!1,null,"675aacc2",null),y=k.exports,x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cart",on:{click:t.cart}},[e("router-link",{attrs:{to:"/shoppingcart"}},[e("img",{attrs:{src:r(5103),alt:""}}),e("div",{staticClass:"cartNum"},[t._v(t._s(t.cartNum))])])],1)},T=[],N={name:"Chest",methods:{cart(){console.log("cart")}},computed:{cartNum(){return this.$store.state.cartList.length}},mounted(){this.$store.commit("GET_CART")}},O=N,$=(0,c.Z)(O,x,T,!1,null,"d44de15e",null),D=$.exports,L=function(){var t=this;t._self._c;return t._m(0)},A=[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"footer"},[e("p",[t._v("power by Jackson Wu")])])])}],B={name:"MyFooter"},E=B,F=(0,c.Z)(E,L,A,!1,null,"248f905c",null),M=F.exports,Z={name:"Home",components:{NavBar:g,Slide:y,Chest:D,MyFooter:M}},I=Z,R=(0,c.Z)(I,p,h,!1,null,null,null),j=R.exports,J=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("NavBar"),e("Slide"),e("div",{staticClass:"productSort"},[e("nav",[e("router-link",{attrs:{"active-class":"active",to:"/products/fullproducts"}},[t._v("Full")]),e("router-link",{attrs:{to:"/products/notfinished"}},[t._v("Pickaxe")]),e("router-link",{attrs:{to:"/products/notfinished"}},[t._v("Sword")]),e("router-link",{attrs:{to:"/products/notfinished"}},[t._v("Others")])],1),e("router-view")],1),e("Chest"),e("MyFooter")],1)},G=[],U={name:"Products",components:{NavBar:g,Slide:y,MyFooter:M,Chest:D},computed:{productList(){return this.$store.state.productList}},mounted(){console.log(this)}},W=U,H=(0,c.Z)(W,J,G,!1,null,"5faf3059",null),q=H.exports,K=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"item"},[e("h1",[t._v("Full Products")]),e("div",{staticClass:"productList"},t._l(t.productList,(function(r){return e("div",{key:r.id,staticClass:"product"},[e("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:r.location,alt:""}}),e("p",[t._v(t._s(r.name))]),e("p",{staticStyle:{color:"blue"}},[t._v("$"+t._s(r.price))]),e("button",[t._v("Detail")]),e("button",{staticClass:"addBtn",on:{click:function(e){return t.addToCart(r)}}},[t._v("Add to cart")])])})),0)])])},Q=[],X=r(691),z={name:"Products",data(){return{CartP:[]}},components:{NavBar:g},computed:{productList(){return this.$store.state.productList}},methods:{addToCart(t){this.CartP={...t,id:(0,X.x0)()},console.log(this.CartP),this.$bus.$emit("AddProductToCart",this.CartP),this.$store.commit("ADD_CART",this.CartP)}},mounted(){console.log(this)}},V=z,Y=(0,c.Z)(V,K,Q,!1,null,"05a5ca9f",null),tt=Y.exports,et=function(){var t=this,e=t._self._c;return e("div",[e("NavBar"),e("Slide"),e("div",{staticClass:"shoppingCart"},[e("table",[t._m(0),t._l(t.cartList,(function(r,o){return e("tr",{key:o},[e("td",[t._v(t._s(r.name))]),e("td",[t._v(t._s(r.price))]),e("td",[t._v("1")]),e("td",{staticClass:"deleetBtn",on:{click:function(e){return t.deleteProduct(r.id)}}},[t._v("X")])])}))],2)]),e("br"),e("div",{staticClass:"totalPrice"},[e("p",[t._v("Total Price")]),e("p",[t._v(t._s(t.SumPrice))])]),e("br"),e("router-link",{attrs:{to:"/checkout"}},[e("button",{staticClass:"checkBtn"},[t._v("Checkout")])]),e("Chest"),e("MyFooter")],1)},rt=[function(){var t=this,e=t._self._c;return e("tr",[e("th",[t._v("Product Name")]),e("th",[t._v("Quantity")]),e("th",[t._v("Price")]),e("th",[t._v("delete")])])}],ot=r(3822),nt={name:"ShoppingCart",components:{NavBar:g,Slide:y,MyFooter:M,Chest:D},computed:{...(0,ot.rn)(["productList","cartList"]),SumPrice(){let t=0;return this.cartList.forEach((e=>{t+=Number(e.price)})),t}},methods:{deleteProduct(t){this.$store.commit("DELETE_PRODUCT",t),this.$bus.$emit("DeleteCart",t)}}},it=nt,at=(0,c.Z)(it,et,rt,!1,null,"07a449dc",null),st=at.exports,ct=function(){var t=this,e=t._self._c;return e("div",[e("NavBar"),e("Slide"),t._m(0),e("MyFooter")],1)},lt=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"thankText"},[e("h1",[t._v("Thank you for your purchase.")]),e("br"),e("h1",[t._v("We will quickly process your orders.")])])}],ut={name:"CheckOut",components:{NavBar:g,Slide:y,MyFooter:M},mounted(){this.$bus.$emit("ClearCart")}},dt=ut,pt=(0,c.Z)(dt,ct,lt,!1,null,null,null),ht=pt.exports,mt=function(){var t=this;t._self._c;return t._m(0)},ft=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Not Finished")])])}],_t={name:"NotFinished"},vt=_t,Ct=(0,c.Z)(vt,mt,ft,!1,null,null,null),gt=Ct.exports,bt=function(){var t=this,e=t._self._c;return e("div",[e("NavBar"),e("Slide"),t._m(0),e("Chest"),e("MyFooter")],1)},St=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact"},[e("h1",[t._v("Contact Us")]),e("p",[t._v("email: minecraft@example.com")]),e("p",[t._v("telephone: 0800-000-000")])])}],Pt={name:"ContactUs",components:{NavBar:g,Slide:y,MyFooter:M,Chest:D}},wt=Pt,kt=(0,c.Z)(wt,bt,St,!1,null,"5bd145e0",null),yt=kt.exports;const xt=new d.Z({routes:[{path:"*",redirect:"/home"},{path:"/home",component:j},{path:"/products",component:q,redirect:"/products/fullproducts",children:[{path:"fullproducts",component:tt},{path:"notfinished",component:gt}]},{path:"/shoppingcart",component:st},{path:"/checkout",component:ht,meta:{isAuth:!0,title:"Checkout"}},{path:"/contactus",component:yt}]});xt.beforeEach(((t,e,r)=>{r(),t.meta.isAuth&&0==JSON.parse(localStorage.getItem("Cart")).length?(alert("Cart can't be empty"),xt.push({path:"/shoppingcart"})):r()}));var Tt=xt;o["default"].use(ot.ZP);const Nt={getCart(t){console.log("getCart",t)}},Ot={ADD_CART(t,e){console.log("mutation中的ADD_CART被調用",e),localStorage.setItem("Cart",JSON.stringify(e)),t.cartList.unshift(e)},GET_CART(t){t.cartList=JSON.parse(localStorage.getItem("Cart"))},DELETE_PRODUCT(t,e){console.log("mutation中的DELETE_PRODUCT被調用",e),t.cartList=t.cartList.filter((t=>t.id!=e)),localStorage.setItem("Cart",JSON.stringify(t.cartList))}},$t={SumPrice(){let t=0;return console.log("mutation中的SumPrice被調用"),JSON.parse(localStorage.getItem("Cart")).forEach((e=>{t+=Number(e.price)})),t}},Dt={productList:[{id:"001",name:"Wooden Pickaxe",price:"1000",location:"/products_img/Wooden_Pickaxe.webp"},{id:"002",name:"Stone Pickaxe",price:"2000",location:"/products_img/Stone_Pickaxe.webp"},{id:"003",name:"Iron Pickaxe",price:"3000",location:"/products_img/Iron_Pickaxe.webp"},{id:"004",name:"Golden Pickaxe",price:"4000",location:"/products_img/Golden_Pickaxe.webp"},{id:"005",name:"Diamond Pickaxe",price:"5000",location:"/products_img/Diamond_Pickaxe.webp"},{id:"006",name:"Wooden Sword",price:"1000",location:"/products_img/Wooden_Sword.webp"},{id:"007",name:"Stone Sword",price:"2000",location:"/products_img/Stone_Sword.webp"},{id:"008",name:"Iron Sword",price:"3000",location:"/products_img/Iron_Sword.webp"},{id:"009",name:"Golden Sword",price:"4000",location:"/products_img/Golden_Sword.webp"},{id:"010",name:"Diamond Sword",price:"5000",location:"/products_img/Diamond_Sword.webp"}],cartList:[]};var Lt=new ot.ZP.Store({actions:Nt,mutations:Ot,getters:$t,state:Dt}),At=r(8499);o["default"].config.productionTip=!1,o["default"].use(d.Z),o["default"].component(At.Table.name,At.Table),o["default"].component(At.TableColumn.name,At.TableColumn),new o["default"]({render:t=>t(u),router:Tt,store:Lt,beforeCreate(){o["default"].prototype.$bus=this}}).$mount("#app")},9122:function(t,e,r){t.exports=r.p+"img/img1.b1d45e46.jpg"},3953:function(t,e,r){t.exports=r.p+"img/minecraftLogo.4b832039.png"},5103:function(t,e,r){t.exports=r.p+"img/Chest.db36dbd6.webp"}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(e,o,n,i){if(!o){var a=1/0;for(u=0;u<t.length;u++){o=t[u][0],n=t[u][1],i=t[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((function(t){return r.O[t](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,n,i]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/MineStore/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,i,a=o[0],s=o[1],c=o[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(c)var u=c(r)}for(e&&e(o);l<a.length;l++)i=a[l],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(u)},o=self["webpackChunkminecraft_store"]=self["webpackChunkminecraft_store"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(1059)}));o=r.O(o)})();
//# sourceMappingURL=app.b7e1176d.js.map