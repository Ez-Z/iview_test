<template>
	<div class="tablePageContainer">
		<div class="pageHeader">
			<slot name="header"></slot>	
		</div>
		<div class="tableContext">
			<Table
			border
			:highlight-row="oneSelect"
			:columns="columns"
			:data="tableData"
			@on-selection-change="handleSelectionChange"
			@on-current-change="handleSelectionChange"
			></Table>
		</div>
		<div class="pageContext">
			<Page :total="page.total" :page-size="10" show-total show-elevator></Page>
		</div>
	</div>
</template>

<script>



let Component = {
	props: {
		columns: Array,
		tableData: Array,
		page: Object,
		oneSelect: Boolean
	},
	data () {
		return {
			
		};
	},
	mounted() {
		
	},
	methods: {
		handleSelectionChange(selection) {
			this.$emit('selectChange', selection);
		},
	}
};
export default Component;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.tablePageContainer {
	font-size: 14px;
	.pageHeader {
		width: 100%;
		margin-bottom: 20px;
	}
	.pageContext {
		margin-top: 10px;
		text-align: right;
	}
}
</style>
