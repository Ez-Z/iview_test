<template>
	<div class="main">
		<vHeader
		@on-hide="hideMenu"
		>
		</vHeader>
		<nav-list 
		:menuList="menuList"
		>
		</nav-list>
		<div :style="{width: containerWidth + 'px', height: containerHeight + 'px'}" :class="{'container': true, 'full': menuHide}">
			<router-view></router-view>
		</div>		
	</div>
</template>

<script>
import NavList from '@components/Home/NavList';
import vHeader from '@components/Home/Header';
import pageRouters from '@router/pageRouters';

let Component = {
	name: 'Home',
	components: {
		NavList,
		vHeader
	},
	data () {
		return {
			containerWidth: document.body.clientWidth - 240,
			containerHeight: document.body.clientHeight - 70,
			menuList: pageRouters,
			menuHide: false
		};
	},
	
	methods: {
		// changeMenu(name) {
		// 	let willpush = true;
		// 	if (this.beforePush !== undefined) {
		// 		if (!this.beforePush(name)) {
		// 			willpush = false;
		// 		}
		// 	}
		// 	if (willpush) {
		// 		this.$router.push({
		// 			name: name
		// 		});
		// 	}
		// },
		hideMenu() {
			console.log(1);
			if (this.menuHide) {
				this.menuHide = false;
			} else {
				this.menuHide = true;
			}
		}
	}
};
export default Component;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.hello{
	width: 100%;
	height: 100%;
}

a {
	color: #42b983;
}
.main {
	width: 100%;
	height: 100%;
}
.container {
	position: absolute;
	top: 70px;
	left: 240px;
	z-index: 10;
	overflow: auto;
	font-size: 28px;
	background: #fff;
	transition: left 0.5s;
	-moz-transition: left 0.5s;
	-webkit-transition: left 0.5s;
	-o-transition: left 0.5s;
}
.container.full {
	left: 0;
}
</style>
