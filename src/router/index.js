import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/homeView';

Vue.use(Router)

export default new Router({
	mode:'history',
	routes:[
		{
			path:'/',
			name:'root',
			component:Home
		}
		// {
		// 	//更多路由
		// }	
	
	]
})