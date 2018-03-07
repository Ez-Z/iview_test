import * as types from './types';
import url from '@util/url';
const state = {
	openName: '',
	activeName: '',
};

// getters
const getters = {
	names: state => {
		return {
			openName: state.openName,
			activeName: state.activeName
		};
	},
	
};

// actions
const actions = {
	getCurrentName({ commit, state }, name){
		commit(types.GET_ACTIVENAME, {
			name: name
		});
	},
	getNames({ commit, state },path) {
		commit(types.GET_NAMES, {
			path: path
		});
	},
};

// mutations
const mutations = {
	[types.GET_NAMES](state, {
		path
	}) {
		let openName = '';
		let activeName = '';
		openName = path.split('/')[1];
		activeName = path.split('/')[2];

		state.openName = openName;
		state.activeName = activeName;
	},
	[types.GET_ACTIVENAME](state, {name}){
		state.activeName = name;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};
