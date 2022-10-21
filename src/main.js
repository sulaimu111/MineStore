import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import router from './router'

import store from './store'

import { Table,TableColumn } from 'element-ui';

import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueCarousel);

Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);


new Vue({
	render: h => h(App),
	router:router,
	store,
	beforeCreate(){
		Vue.prototype.$bus = this //安裝全局事件總線，bus在這邊是總線的意思
	}
}).$mount('#app')
