<template>
	<div>
		<div class="seachBox">
			<Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
				<FormItem prop="user">
					<Input type="text" v-model="formInline.user" placeholder="Username">
					</Input>
				</FormItem>
				<FormItem prop="password">
					<Input type="password" v-model="formInline.password" placeholder="Password">
					</Input>
				</FormItem>
				<FormItem prop="time">
					<DatePicker type="datetimerange" format="yyyy/MM/dd HH:mm:ss" v-model="formInline.time" placeholder="Select date and time" style="width: 300px"></DatePicker>
				</FormItem>
				<FormItem>
					<Button type="primary" @click="handleSubmit('formInline')"  icon="ios-search">查询</Button>
				</FormItem>
			</Form>
		</div>
		<div class="tableBox">
			<Table border :columns="columns7" :data="data6"></Table>
		</div>
		<order-popup
		:isShow="isShow"
		:modelData="modelData"
		@togglePopup="togglePopup"
		></order-popup>
	</div>
	
</template>

<script>
import { Button } from 'iview';
import orderPopup from '@components/orderManage/orderPopup';


let Component = {
	components: {
		orderPopup,
	},
	data () {
		return {
			isShow: false,
			modelData: {},
			formInline: {
				user: '',
				password: '',
				time: ''
			},
			ruleInline: {
				user: [
					{ required: false, message: 'Please fill in the user name', trigger: 'blur' }
				],
				password: [
					{ required: false, message: 'Please fill in the password.', trigger: 'blur' },
					{ type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
				]
			},
			columns7: [
				{
					title: '姓名',
					key: 'name',
					render: (h, params) => {
						return h('div', [
							h('Icon', {
								props: {
									type: 'person'
								}
							}),
							h('strong', params.row.name)
						]);
					}
				},
				{
					title: '年龄',
					key: 'age'
				},
				{
					title: '地址',
					key: 'address'
				},
				{
					title: '操作',
					key: 'action',
					width: 150,
					align: 'center',
					render: (h, params) => {
						return h('div', [
							h('Button', {
								props: {
									type: 'primary',
									size: 'small'
								},
								style: {
									marginRight: '5px'
								},
								on: {
									click: () => {
										this.togglePopup(params.index);
									}
								}
							}, 'View'),
							h('Button', {
								props: {
									type: 'error',
									size: 'small'
								},
								on: {
									click: () => {
										this.remove(params.index);
									}
								}
							}, 'Delete')
						]);
					}
				}
			],
			data6: [
				{
					name: 'John Brown',
					age: 18,
					address: 'New York No. 1 Lake Park'
				},
				{
					name: 'Jim Green',
					age: 24,
					address: 'London No. 1 Lake Park'
				},
				{
					name: 'Joe Black',
					age: 30,
					address: 'Sydney No. 1 Lake Park'
				},
				{
					name: 'Jon Snow',
					age: 26,
					address: 'Ottawa No. 2 Lake Park'
				}
			]
		};
	},
	methods: {
		handleSubmit(name) {
			this.$refs[name].validate((valid) => {
				if (valid) {
					this.$Message.success('Success!');
					console.log(this.$data.formInline.time[0]);
				} else {
					this.$Message.error('Fail!');
				}
			});
		},
		togglePopup (data) {
			if (!this.isShow) {
				this.modelData = this.data6[data];
			} else {
				this.modelData = {};
				const {
					btn,
					num
				} = data;
				console.table(data);
			}

			this.isShow = !this.isShow;
			// this.$Modal.info({
			// 	title: 'User Info',
			// 	content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
			// });
		},
		remove (index) {
			this.data6.splice(index, 1);
		}
	}
};
export default Component;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

</style>
