<template>
	<div class="tablePageContainer">
		<div class="pageHeader">
			<slot name="header"></slot>	
		</div>
		<div class="tableContext">
			<Table border :columns="columns" :data="tableData"></Table>
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
		page: Object
	},
	data () {
		return {
			
		};
	},
	mounted() {
		
	},
	methods: {
		
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
		margin-top: 40px;
		text-align: right;
	}
}
</style>
