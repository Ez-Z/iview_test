import Vue from 'vue';
import iView from 'iview';
import Router from 'vue-router';
import appRouter from './pageRouters';
import Home from '@pages/Home';
import Welcome from '@pages/Welcome';
import Login from '@pages/Login';
import * as $util from '@util/util';
Vue.use(Router);

let routers = [
	// {
	// 	path: '/',
	// 	name: 'index',
	// 	component: index
	// },
	// {
	// 	path: '/cart',
	// 	name: 'Cart',
	// 	component: Cart
	// },
	{
		path: '/',
		name: 'home',
		redirect: '/welcome',
		component: Home,
		children: [
			{ path: 'welcome', title: 'welcome', name: 'welcome', component: Welcome }
		]
	},
	{
		path: '/login',
		name: 'login',
		meta: {
			title: '登录'
		},
		component: Login
	},
	...appRouter
];

let router = new Router({
	mode: 'history',
	routes: routers
});
router.beforeEach((to, from, next) => {
	iView.LoadingBar.start();
	$util.title(to.meta.title);
	if (!$util.getCookie('user') && to.name !== 'login') { // 判断是否已经登录且前往的页面不是登录页
		next({
			name: 'login'
		});
	} else if ($util.getCookie('user') && to.name === 'login') { // 判断是否已经登录且前往的是登录页
		$util.title();
		next({
			name: 'home'
		});
	} else {
		$util.toDefaultPage([...routers], to.name, router, next);
	}
});

router.afterEach((to) => {
	iView.LoadingBar.finish();
	window.scrollTo(0, 0);
});


export default router;
