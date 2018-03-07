import Home from '@pages/Home';
import orderManage from '@pages/finLife/orderManage';
import transactionAnalysis from '@pages/finLife/transactionAnalysis';
import jiaRiBaoManage from '@pages/functional/jiaRiBaoManage';
import financialManage from '@pages/functional/financialManage';
import Cart from '@pages/Cart';

const pageRouters = [
	{
		path: '/finLife',
		icon: 'social-buffer',
		name: 'finLife',
		title: '理财生活圈',
		component: Home,
		children: [
			{
				path: 'orderManage',
				icon: 'pound',
				name: 'orderManage',
				meta: {
					title: '订单管理'
				},
				component: orderManage
			},
			{
				path: 'transactionAnalysis',
				icon: 'arrow-move',
				name: 'transactionAnalysis',
				meta: {
					title: '交易分析'
				},
				component: transactionAnalysis
			}
		]
	},
	{
		path: '/functional',
		icon: 'android-sad',
		name: 'functional',
		title: '功能',
		component: Home,
		children: [
			{
				path: 'jiaRiBaoManage',
				icon: 'pound',
				name: 'jiaRiBaoManage',
				meta: {
					title: '假日宝管理'
				},
				component: jiaRiBaoManage
			},
			{
				path: 'financialManage',
				icon: 'arrow-move',
				name: 'financialManage',
				meta: {
					title: '投资管理'
				},

				component: financialManage
			}
		]
	},
	// {
	// 	path: '/cart',
	// 	icon: 'android-sad',
	// 	name: 'cart',
	// 	title: '购物车',
	// 	component: Home,
	// 	children: [
	// 		{
	// 			path: 'index',
	// 			icon: 'pound',
	// 			name: 'index',
	// 			meta: {
	// 				title: '购物车'
	// 			},
	// 			component: Cart
	// 		}
	// 	]
	// },
	// {
	// 	path: '/error-page',
	// 	icon: 'android-sad',
	// 	title: '错误页面',
	// 	name: 'errorpage',
	// 	component: Home,
	// 	children: [
	// 		{ path: 'index', title: '错误页面', name: 'errorpage_index', component: resolve => { require(['@/views/error-page/error-page.vue'], resolve); } }
	// 	]
	// }
];


export default pageRouters;
