import Home from '@pages/Home';
import orderManage from '@pages/finLife/orderManage';
import transactionAnalysis from '@pages/finLife/transactionAnalysis';
import jiaRiBaoManage from '@pages/functional/jiaRiBaoManage';
import financialManage from '@pages/functional/financialManage';
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
				title: '订单管理',
				component: orderManage
			},
			{
				path: 'transactionAnalysis',
				icon: 'arrow-move',
				name: 'transactionAnalysis',
				title: '交易分析',
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
				path: 'jiaRiBaoManange',
				icon: 'pound',
				name: 'jiaRiBaoManange',
				title: '假日宝管理',
				component: jiaRiBaoManage
			},
			{
				path: 'financialMange',
				icon: 'arrow-move',
				name: 'financialMange',
				title: '投资管理',
				component: financialManage
			}
		]
	},
	{
		path: '/functional2',
		icon: 'android-sad',
		name: 'functional2',
		title: '功能2',
		component: Home,
		children: [
			{
				path: 'jiaRiBaoManange2',
				icon: 'pound',
				name: 'jiaRiBaoManange2',
				title: '假日宝管理2',
				component: jiaRiBaoManage
			}
		]
	},
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
