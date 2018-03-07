import Vue from 'vue';
import Vuex from 'vuex';
import cart from './Cart';
import Home from './Home';
import createLogger from '@plugins/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	// actions,
	// getters,
	modules: {
		cart,
		Home
	},
	strict: debug,
	plugins: debug ? [createLogger()] : []
});