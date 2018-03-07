<template>
	<div class="login" @keydown.enter="handleSubmit">
		<div class="login-con">
			<h1 class="login-logo">
				<img src="../img/login-logo.png" alt="钱保姆后台管理系统">
			</h1>
			<div class="form-con">
				<Form ref="loginForm" :model="form" :rules="rules">
					<FormItem prop="userName">
						<Input v-model="form.userName" @keyup.enter="handleSubmit" size="large" placeholder="用户名"></Input>
					</FormItem>
					<FormItem prop="password">
						<Input type="password" v-model="form.password" @keyup.enter="handleSubmit" size="large" placeholder="登录密码"></Input>
					</FormItem>
					<FormItem prop="vcode">
						<Input type="text" v-model="form.vcode" @keyup.enter="handleSubmit" size="large" :maxlength="4" placeholder="验证码" style="width: 190px;"></Input>
						<img src="../img/vcode.png" class="vcode" @click="changeVcode">
					</FormItem>
					<FormItem>
						<Button @click="handleSubmit" type="warning" size="large" long>登录</Button>
					</FormItem>
				</Form>
			</div>
		</div>
	</div>
</template>

<script>
import { setCookie, setItem, getItem } from '@util/util';
import url from '@util/url';
import Home from '@pages/Home';
import { components } from '@router/pageComponents';


export default {
	data () {
		return {
			form: {
				userName: 'admin',
				password: ''
			},
			rules: {
				userName: [
					{ required: true, message: '用户名不能为空', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '密码不能为空', trigger: 'blur' }
				],
				vcode: [
					{ required: true, message: '验证码不能为空', trigger: 'blur' }
				]
			}
		};
	},
	methods: {
		changeVcode(){
			console.log("更换验证码");
		},
		handleSubmit () {
			this.$refs.loginForm.validate((valid) => {
				if (valid) {
					setCookie('user', this.form.userName);

					// //动态获取页面 + 设置路由
					// let pageData = []; //后台返回页面信息
					// let pageRouters = []; //动态添加路由
					// fetch(`${url.webUrl}/pages`).then(response => {
					// 	return response.json();
					// }).then( data =>{
					// 	pageData = data;
					// 	for (let i = 0; i < pageData.length; i++) {
					// 		pageData[i] = {
					// 			...pageData[i],
					// 			path: '/' + pageData[i].name,
					// 			component: Home
					// 		};
					// 		let $children = [...pageData[i].children];
					// 		for (let j = 0; j < $children.length; j++) {
					// 			let component = {};
					// 			for (let k = 0; k < components.length; k++) {
					// 				if (components[k].name == $children[j].name) {
					// 					component = components[k];
					// 				}
					// 			}

					// 			$children[j] = {
					// 				...$children[j],
					// 				name: '' + $children[j].name,
					// 				path: $children[j].name,
					// 				component: component,
					// 				meta: {
					// 					title: $children[j].title
					// 				}
					// 			};
					// 		}
					// 		pageData[i] = {
					// 			...pageData[i],
					// 			children: $children
					// 		};
					// 		pageRouters = [
					// 			...pageRouters,
					// 			pageData[i]
					// 		];
					// 	}

					// 	this.$router.addRoutes(pageRouters);

					// 	const pm = new Promise((resolve, reject) => {
					// 		setItem('pageRouters', pageRouters);
					// 	  	resolve && resolve();
					// 	});

					// 	pm.then(()=> {
					// 		this.$router.push({
					// 			name: 'home'
					// 		});
					// 	});
					// });
					this.$router.push({
						name: 'home'
					});
				}
			});
		},
	}
};
</script>

<style lang='scss' >
.login{
	position: relative;
	width: 100%;
	height: 100%;
	background-color: #f8f6f2;
	.login-con{
		position: absolute;
		width: 300px;
		height: 230px;
		left: 50%;
		top: 50%;
		margin-left: -150px;
		margin-top: -150px;
		.login-logo{
			text-align: center;
		}
		
		.form-con{
			padding: 10px 0 0;
			.ivu-input-large,.ivu-btn-large{
				height: 44px;
			}
			.ivu-btn-large{
				font-size: 16px;
			}
		}
		.vcode{
			height: 44px;
			background-color: #fff;
			float: right;
			width: 100px;
			border-radius: 4px;
			cursor: pointer;
		}
	}
}


</style>
