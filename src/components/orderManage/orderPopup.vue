<template>
	<Modal
        :value="isShow"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel" >
        <p
		v-for="(item, key) in modelData"
        >
        	{{key}}: {{item}}
        </p>
    </Modal>	
</template>

<script>
import { Button } from 'iview';



let Component = {
	name: 'orderPopup',
	props:[
		'isShow',
		'modelData'
	],
	data () {
		return {};
	},
	
	methods: {
		ok () {
            this.$Message.info('Clicked ok');
            this.$emit('togglePopup', {btn: 'ok', num: 1});
        },
        cancel () {
            this.$Message.info('Clicked cancel');
            this.$emit('togglePopup', {btn: 'cancel', num: 0});
        }
	}
};
export default Component;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

</style>
