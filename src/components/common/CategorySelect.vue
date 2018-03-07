<template>	
	<FormItem label="商品品类">
		<Select :value="levelOne" @on-change="selectAbledTwo" style="width:100px">
			<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
		</Select>
		<Select :value="levelTwo" @on-change="selectAbledThree" style="width:100px" :disabled="levelTwoDisabled">
			<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
		</Select>
		<Select :value="levelThree" @on-change="setLevelThree" style="width:100px" :disabled="levelThreeDisabled">
			<Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
		</Select>
	</FormItem>
</template>

<script>



let Component = {
	props: {
		levelOne: String,
		levelTwo: String,
		levelThree: String,
	},
	data () {
		return {
			cityList: [
				{
					value: '',
					label: 'all'
				},
				{
					value: 'New York',
					label: 'New York'
				},
				{
					value: 'London',
					label: 'London'
				},
				{
					value: 'Sydney',
					label: 'Sydney'
				},
				{
					value: 'Ottawa',
					label: 'Ottawa'
				},
				{
					value: 'Paris',
					label: 'Paris'
				},
				{
					value: 'Canberra',
					label: 'Canberra'
				}
			],
			levelTwoDisabled: true,
			levelThreeDisabled: true,
		};
	},
	mounted() {
		
	},
	methods: {
		selectAbledTwo(value) {
			if (value) {
				this.$emit('update:levelOne', value);
				this.levelTwoDisabled = false;
			} else {
				this.levelTwoDisabled = true;
				this.levelThreeDisabled = true;
				this.$emit('update:levelTwo', '');
				this.$emit('update:levelThree', '');
				return false;
			}
			
		},
		selectAbledThree(value) {
			if (value) {
				this.$emit('update:levelTwo', value);
				this.levelThreeDisabled = false;
			} else {
				this.levelThreeDisabled = true;
				this.$emit('update:levelThree', '');
				return false;
			}
		},
		setLevelThree(value) {
			this.$emit('update:levelThree', value);
		}
	}
};
export default Component;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

</style>
