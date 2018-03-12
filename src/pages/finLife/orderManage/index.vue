<template>
	<div>
		<TablePage
		:columns="columns"
		:tableData="data6"
		:page="page"
		:oneSelect="false"
		@selectChange="handleSelectionChange"
		>
			<Button type="primary" icon="plus" slot="header" style="margin-right: 5px;">新增</Button>
			<Button type="primary" icon="android-search" slot="header" @click="toggleSearch">搜索</Button>
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
	name: 'orderManageIndex',
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
			ids: [],
			page: {
				total: 150
			},
			columns: [ //表格key值、title等设置
				{
					type: 'selection',
					width: 60,
					align: 'center',
				},
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
					width: 220,
					align: 'center',
					render: (h, params) => {
						return h('div', [
							h('Button', {
								props: {
									type: 'primary',
									icon: 'compose',
									size: 'small'
								},
								on: {
									click: () => {
										this.togglePopup(params.index);
									}
								}
							},'编辑'),
							h('Poptip', {
								props: {
									confirm: true,
									title: '您确定要删除这条数据吗?',
									transfer: true
								},
								on: {
									'on-ok': () => {
										console.log(params);
										this.remove(params.index);
									}
								}
							}, [
								h('Button', {
									style: {
										margin: '0 5px'
									},
									props: {
										type: 'error',
										placement: 'top',
										size: 'small',
										icon: 'trash-a'	
									}
								}, '删除')
							])
						]);
					}
				}
			],
			data6: [ //模拟表格数据
				{
					id: 1,
					name: 'John Brown',
					age: 18,
					address: 'New York No. 1 Lake Park'
				},
				{
					id: 2,
					name: 'Jim Green',
					age: 24,
					address: 'London No. 1 Lake Park'
				},
				{
					id: 3,
					name: 'Joe Black',
					age: 30,
					address: 'Sydney No. 1 Lake Park'
				},
				{
					id: 4,
					name: 'Jon Snow',
					age: 26,
					address: 'Ottawa No. 2 Lake Park'
				},
				{
					id: 5,
					name: 'John Brown',
					age: 18,
					address: 'New York No. 1 Lake Park'
				},
				{
					id: 6,
					name: 'Jim Green',
					age: 24,
					address: 'London No. 1 Lake Park'
				},
				{
					id: 7,
					name: 'Joe Black',
					age: 30,
					address: 'Sydney No. 1 Lake Park'
				},
				{
					id: 8,
					name: 'Jon Snow',
					age: 26,
					address: 'Ottawa No. 2 Lake Park'
				},
				{
					id: 9,
					name: 'John Brown',
					age: 18,
					address: 'New York No. 1 Lake Park'
				},
				{
					id: 10,
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
		//多选
		handleSelectionChange(selection) {
			// console.log(selection);
			let ids = [];
			if (selection.length > 0) {
				for (let i = 0; i < selection.length; i++) {
					const element = selection[i];
					ids.push(element.id);
				}
			} else if (selection instanceof Object && selection.id) {
				this.handleCurrentChange(selection);
				return;
			}
			console.log(ids);
			this.ids = ids;
		},
		handleCurrentChange(curr) {
			console.log(curr);
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
			console.log(index);
			this.data6.splice(index, 1);
		}
	}
};
export default Component;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

</style>
