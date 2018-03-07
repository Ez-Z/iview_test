<template>
	<div>
		<TablePage
		:columns="columns"
		:tableData="data6"
		:page="page"
		>
			<Button type="primary" slot="header" style="margin-right: 5px;">新增</Button>
			<Button type="primary" @click="toggleSearch" icon="ios-search" slot="header"></Button>
		</TablePage>

		<search-bar
		:searchShow="searchShow"
		:formItem.sync="formItem"
		@toggleSearch="toggleSearch"
		@searchSubmit="handleSubmit"
		>
			<FormItem label="user">
				<Input type="text" placeholder="Username" v-model="formItem.input" style="width: 200px;">
				</Input>
			</FormItem>
			<FormItem label="订单时间">
				<DatePicker format="yyyy-MM-dd HH:mm:ss" placement="bottom-end" type="datetimerange" @on-change="handleDateChange" style="width: 300px"></DatePicker>
			</FormItem>
			<CategorySelect
			:levelOne.sync="formItem.levelOne"
			:levelTwo.sync="formItem.levelTwo"
			:levelThree.sync="formItem.levelThree"
			></CategorySelect>
		</search-bar>

		<order-popup
		:isShow="popShow"
		@togglePopup="togglePopup"
		></order-popup>
	</div>
</template>

<script>
import orderPopup from '@components/orderManage/orderPopup';
import TablePage from '@components/common/TablePage';
import searchBar from '@components/common/SearchBar';
import CategorySelect from '@components/common/CategorySelect';

let Component = {
	name: 'orderManage',
	components: {
		orderPopup,
		TablePage,
		searchBar,
		CategorySelect
	},
	data () {
		return {
			popShow: false, //弹窗是否显示
			searchShow: false, //搜索块是否显示
			formItem: {
				input: '',
				channelId: '',
				levelOne: '',
				levelTwo: '',
				levelThree: '',
				date: '',
			},
			page: {
				total: 150
			},
			columns: [ //表格key值、title等设置
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
			data6: [ //模拟表格数据
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
				},
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
				},
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
			]
		};
	},
	methods: {
		//搜索提交
		handleSubmit() {
			console.log(this.formItem);
		},
		//显示隐藏弹窗
		togglePopup (data) {
			this.popShow = !this.popShow;
		},
		//日期选择数据绑定
		handleDateChange(value) {
			console.log(value);
			this.formItem.date = value;
		},
		//显示隐藏搜索
		toggleSearch () {
			this.searchShow = !this.searchShow;
		},
		//删除
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
