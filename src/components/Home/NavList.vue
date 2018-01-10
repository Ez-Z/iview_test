<template>
	<Menu ref="navList" class="sidebar-menu-con" :active-name="activeName" :theme="theme" :open-names="openNames" accordion @on-select="handleClick">
		<template v-for="item in menuList">
			<MenuItem v-if="item.children.length<=1" :name="item.children[0].name" :key="item.name">
				<Icon :type="item.icon" :size="iconSize" :key="item.name"></Icon>
				<span class="layout-text" :key="item.name">{{item.title}}</span>
			</MenuItem>
			<Submenu v-if="item.children.length>1" :name="item.name">
				<template slot="title">
					<Icon type="ionic"></Icon>
					{{item.title}}
				</template>
				<template v-for="child in item.children">
					<MenuItem :name="child.name" :key="child.name">{{child.title}}</MenuItem>
				</template>
			</Submenu>
		</template>
	</Menu>
</template>

<script>


let Component = {
	props: {
		menuList: Array,
	},
	data () {
		return {
			isCreate: false,
			theme: 'dark',
			iconSize: '20px',
			openNames: [],
			activeName: ''
		};
	},
	created() {
		if (!this.$data.isCreate) {
			let urlPath = this.$router.history.current.path;
			this.openNames.push(urlPath.split('/')[1]);
			this.activeName = urlPath.split('/')[2];
		}	
	},
	methods: {
		handleClick(name) {
			this.$emit('on-change', name);
		},
	},
	mounted () {

	}
	
};
export default Component;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
ul {
	list-style-type: none;
	padding: 0;
	width: 240px;
	height: 100%;
}

li {
	display: inline-block;
	width: 100%;
}
.sidebar-menu-con{
	width: 240px;
	height: 100%;
	position: fixed;
	top: 70px;
	left: 0;
	z-index: 9;
	transition: width .3s;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
	background-color: #2d8cf0!important;
	color: #fff;
	border: none;
}
</style>
