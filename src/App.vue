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
				console.log(this.Cart)
			}
		},
		mounted(){
			this.$bus.$on('AddProductToCart', this.AddToCart)
			console.log(this)
			// this.$store.commit('GET_CART')
		},
		beforeDestroy(){
			this.$bus.$off('AddProductToCart')
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
