import Vue from 'vue';
import Vuex from 'vuex';
// import cart from './Cart';
import app from './modules/app';
import user from './modules/user';
import createLogger from '@plugins/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	// actions,
	// getters,
	modules: {
		// cart,
		user,
		app
	},
	strict: debug,
	plugins: debug ? [createLogger()] : []
});