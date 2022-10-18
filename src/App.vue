<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'App',
		data(){
			return {
				Cart: JSON.parse(localStorage.getItem('Cart')) || []
			}
		},
		watch:{
			Cart:{
				deep:true,
				handler(value){
					localStorage.setItem('Cart', JSON.stringify(value))
				}
			}
		},
		methods:{
			AddToCart(product){
				console.log('product', product)
				this.Cart.unshift(product)
				
			},
			DeleteCart(id){
				this.Cart = this.Cart.filter((item)=>{
					return item.id != id
				})
				console.log('APP', this.Cart)
			},
			ClearCart(){
				while(this.Cart.length){
					this.Cart.pop()
				}
			}
		},
		mounted(){
			this.$bus.$on('AddProductToCart', this.AddToCart)
			this.$bus.$on('DeleteCart', this.DeleteCart)
			this.$bus.$on('ClearCart', this.ClearCart)
			console.log(this)
			// this.$store.commit('GET_CART')
		},
		beforeDestroy(){
			this.$bus.$off('AddProductToCart')
			this.$bus.$off('DeleteCart')
			this.$bus.$off('ClearCart')
		}
	}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	/* margin-top: 60px; */

}
</style>
