import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import iView from 'iview';
import './css/reset.css';
import 'iview/dist/styles/iview.css';
import * as Util from './util/util';
import url from './util/url';
// import adaptive from './util/adaptive';
import VueQuillEditor from 'vue-quill-editor';

// require styles
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
// let localRoutes = Util.getItem('pageRouters');
// if(localRoutes){
// 	console.log(localRoutes);
// 	let baseRoutes = router.options.routes;
// 	router.options.routes = [...baseRoutes, ...localRoutes];
//     router.addRoutes(localRoutes);
// }

Vue.config.productionTip = false;
Vue.prototype.$util = Util;
Vue.prototype.$url = url;
Vue.use(iView);
Vue.use(VueQuillEditor);
Vue.filter('currency', Util.currency);
/* eslint-disable no-new */
const app = new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App)
});

/**
 *
 * 　　　　　　　   ┏┓　　　┏┓
 * 　　　　　　　┏┛┻━━━┛┻━┓
 * 　　　　　　　┃　　　　　　   ┃
 * 　　　　　　　┃　　　━　　   ┃
 * 　　　　　　　┃　┳┛　┗┳　 ┃
 * 　　　　　　　┃　　　　　　   ┃
 * 　　　　　　　┃　　┻　　  　 ┃
 * 　　　　　　　┃　　　　　　   ┃
 * 　　　　　　　┗━┓　　　┏━┛Code is far away from bug with the animal protecting
 * 　　　　　　　　　┃　　　┃    神兽保佑,代码无bug
 * 　　　　　　　　　┃　　　┃
 * 　　　　　　　　　┃　　　┗━━━┓
 * 　　　　　　　　　┃　　　　　   ┣┓
 * 　　　　　　　   ┃　　　　 	   ┏┛
 * 　　　　　　　　┗┓┓┏━┳┓┏┛
 * 　　　　　　　　　┃┫┫　 ┃┫┫
 * 　　　　　　　　  ┗┻┛　 ┗┻┛
 *
 */

/**
 * 　　　　　　　    ┏┓　　　┏┓
 * 　　　　　　　 ┏┛┻━━━┛┻━┓
 * 　　　　　　　 ┃　　　　　　   ┃ 　
 * 　　　　　　　 ┃　　　━　　　 ┃
 * 　　　　　　　 ┃　＞　　　＜   ┃
 * 　　　　　　　 ┃　　　　　　   ┃
 * 　　　　　　　 ┃...　⌒　...   ┃
 * 　　　　　　　 ┃　　　　　　   ┃
 * 　　　　　　　 ┗━┓　　　┏━┛
 * 　　　　　　　　　┃　　　┃　Code is far away from bug with the animal protecting　　　　　　　　　　
 * 　　　　　　　　　┃　　　┃   神兽保佑,代码无bug
 * 　　　　　　　　　┃　　　┃　　　　　　　　　　　
 * 　　　　　　　　　┃　　　┃  　　　　　　
 * 　　　　　　　　　┃　　　┃
 * 　　　　　　　　　┃　　　┃　　　　　　　　　　　
 * 　　　　　　　　　┃　　　┗━━━━┓
 * 　　　　　　　　　┃　　　　　　    ┣┓
 * 　　　　　　　　　┃　　　　　　   ┏┛
 * 　　　　　　　　　┗┓┓┏━┳┓┏┛
 * 　　　　　　　　　 ┃┫┫  ┃┫┫
 * 　　　　　　　　　 ┗┻┛  ┗┻┛
 */
/**
 *　　　　　　　   ┏┓　　┏┓+ +
 *　　　　　　　┏┛┻━━┛┻━┓ + +
 *　　　　　　　┃　　　　　　  ┃ 　
 *　　　　　　　┃　　　━　　　┃ ++ + + +
 *　　　　　　  ┃	████━████  ┃+
 *　　　　　　　┃　　　　　　　┃ +
 *　　　　　　　┃　　　┻　　　┃
 *　　　　　　　┃　　　　　　  ┃ + +
 *　　　　　　　┗━┓　　　┏━┛
 *　　　　　　　　　┃　　　┃　　　　　　　　　　　
 *　　　　　　　　　┃　　　┃ + + + +
 *　　　　　　　　　┃　　　┃　　　　Code is far away from bug with the animal protecting　　　　　　　
 *　　　　　　　　　┃　　　┃ + 　　　　神兽保佑,代码无bug　　
 *　　　　　　　　　┃　　　┃
 *　　　　　　　　　┃　　　┃　　+　　　　　　　　　
 *　　　　　　　　　┃　 　　┗━━━┓ + +
 *　　　　　　　　　┃ 　　　　　　  ┣┓
 *　　　　　　　　　┃ 　　　　　　  ┏┛
 *　　　　　　　　　┗┓┓┏━┳┓┏┛ + + + +
 *　　　　　　　　　　┃┫┫　┃┫┫
 *　　　　　　　　　  ┗┻┛　┗┻┛+ + + +
 */