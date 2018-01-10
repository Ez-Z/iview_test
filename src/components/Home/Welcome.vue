<template>
	<div>
		{{msg}}
	</div>
</template>

<script>

let Component = {
	name: 'welcome',
	data () {
		return {
			msg: "欢迎使用后台"
		};
	},
	// mounted() {
		
	// }
};
export default Component;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

</style>
