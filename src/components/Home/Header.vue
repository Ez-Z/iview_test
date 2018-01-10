<template>
	<div class="header">
		<div class="logo">后台管理系统</div>
		<div class="controlBtn">
			<Button @click="handleHide" type="primary" icon="navicon-round"></Button>
			<Button @click="handleChange" type="primary" icon="arrow-expand"></Button>
		</div>
		<div class="user-info">
			<Dropdown  @on-click="handleLogout">
				<a href="javascript:void(0)">
					<img class="user-logo" src="../../img/logo-min.jpg">
					{{username}}
					<Icon type="arrow-down-b"></Icon>
				</a>
				<DropdownMenu slot="list">
					<DropdownItem name="logout">退出登录</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</div>
	</div>
</template>

<script>
import { delCookie } from '@util/util';

let Component = {
	props: {
		menuList: Array,
	},
	data () {
		return {
			username: 'admin',
			value: false,
		};
	},
	methods: {
		handleFullscreen() {
			let $body = document.body;
			if (this.value) {
				this.value = false;
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				}
			} else {
				this.value = true;
				if ($body.requestFullscreen) {
					$body.requestFullscreen();
				} else if ($body.mozRequestFullScreen) {
					$body.mozRequestFullScreen();
				} else if ($body.webkitRequestFullScreen) {
					$body.webkitRequestFullScreen();
				} else if ($body.msRequestFullscreen) {
					$body.msRequestFullscreen();
				}
			}
		},
		handleChange() {
			this.handleFullscreen();
		},
		handleHide() {
			this.$emit('on-hide');
		},
		handleLogout(name) {
			console.log(name);
			if (name == "logout") {
				delCookie('user');
				this.$router.push({
					name: 'login'
				});
			}
		}
	},
	
};
export default Component;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
	.header {
		position: relative;
		box-sizing: border-box;
		width: 100%;
		height: 70px;
		font-size: 22px;
		line-height: 70px;
		background: #242f42;
		color: #fff;
		.logo{
			float: left;
			width:250px;
			text-align: center;
		}
	}
	.controlBtn {
		float: left;
		.ivu-btn{
			font-size: 24px;
			line-height: 0.8;
			padding: 4px 8px;
			margin-right: 10px;
		}
	}
	.user-info {
		float: right;
		padding-right: 50px;
		font-size: 16px;
		color: #fff;
		.user-logo{
			position: relative;
			top: 15px;
			left: 0;
			width:40px;
			height:40px;
			border-radius: 50%;
		}
	}
</style>
