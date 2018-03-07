<template>
	<div class="main">
		<vHeader
		@on-hide="hideMenu"
		>
		</vHeader>
		<nav-list 
		:menuList="menuList"
		:cHeight="containerHeight"
		>
		</nav-list>
		<div :style="{width: containerWidth + 'px', height: containerHeight + 'px'}" :class="{'container': true, 'full': menuHide}">
			<router-view></router-view>
		</div>		
	</div>
</template>

<script>
import { getItem } from "@util/util";
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
			menuList: [],
			menuHide: false,
			message: 'guys'
		};
	},
	computed: {
	},
	watch: {
		menuHide: function(newState) {
			if (newState) {
				this.containerWidth = document.body.clientWidth;
			}else {
				this.containerWidth = document.body.clientWidth - 240;				
			}
		}
	},
	beforeCreate: function () {
		console.group('beforeCreate 创建前状态===============》');
		console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
		console.log("%c%s", "color:red","data   : " + this.$data); //undefined 
		console.log("%c%s", "color:red","message: " + this.message);
	},
	created: function () {
		console.group('created 创建完毕状态===============》');
		console.log("%c%s", "color:red","el     : " + this.$el); //undefined
		console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化 
		console.log("%c%s", "color:red","message: " + this.message); //已被初始化
	},
	beforeMount: function () {
		console.group('beforeMount 挂载前状态===============》');
		console.log("%c%s", "color:red","el     : " + (this.$el)); //已被初始化
		console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化  
		console.log("%c%s", "color:red","message: " + this.message); //已被初始化  
	},
	beforeUpdate: function () {
		console.group('beforeUpdate 更新前状态===============》');
		console.log("%c%s", "color:red","el     : " + this.$el);
		console.log(this.$el);   
		console.log("%c%s", "color:red","data   : " + this.$data); 
		console.log("%c%s", "color:red","message: " + this.message); 
	},
	updated: function () {
		console.group('updated 更新完成状态===============》');
		console.log("%c%s", "color:red","el     : " + this.$el);
		console.log(this.$el); 
		console.log("%c%s", "color:red","data   : " + this.$data); 
		console.log("%c%s", "color:red","message: " + this.message); 
	},
	beforeDestroy: function () {
		console.group('beforeDestroy 销毁前状态===============》');
		console.log("%c%s", "color:red","el     : " + this.$el);
		console.log(this.$el);    
		console.log("%c%s", "color:red","data   : " + this.$data); 
		console.log("%c%s", "color:red","message: " + this.message); 
	},
	destroyed: function () {
		console.group('destroyed 销毁完成状态===============》');
		console.log("%c%s", "color:red","el     : " + this.$el);
		console.log(this.$el);  
		console.log("%c%s", "color:red","data   : " + this.$data); 
		console.log("%c%s", "color:red","message: " + this.message);
	},
	mounted() {
		console.group('mounted 挂载结束状态===============》');
		console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
		console.log(this.$el);    
		console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
		console.log("%c%s", "color:red","message: " + this.message); //已被初始化 
		window.addEventListener('resize', ()=>{
			this.containerWidth = document.body.clientWidth - 240;
			this.containerHeight = document.body.clientHeight - 70;
		},false);
		this.menuList = pageRouters;
	},
	methods: {
		hideMenu() {
			this.menuHide = !this.menuHide;
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

.main {
	width: 100%;
	height: 100%;
}
.container {
	position: absolute;
	top: 70px;
	left: 240px;
	padding: 20px;
	z-index: 10;
	overflow: auto;
	overflow-x: hidden;
	font-size: 16px;
	background: #fff;
	transition: left 0.5s, width 0.5s;
	-moz-transition: left 0.5s, width 0.5s;
	-webkit-transition: left 0.5s, width 0.5s;
	-o-transition: left 0.5s, width 0.5s;
}
.container.full {
	left: 0;
}
</style>
