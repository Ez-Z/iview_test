<template>
	<div class="">
		<Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
			<FormItem prop="user">
				<Input type="text" v-model="formInline.user" placeholder="Username">
				</Input>
			</FormItem>
			<FormItem prop="password">
				<Input type="password" v-model="formInline.password" placeholder="Password">
				</Input>
			</FormItem>
			<FormItem>
				<Button type="primary" @click="handleSubmit('formInline')"  icon="ios-search">查询</Button>
			</FormItem>
		</Form>
	</div>
</template>

<script>

let Component = {
	data () {
        return {
            formInline: {
                user: '',
                password: ''
            },
            ruleInline: {
                user: [
                    { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                    { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        }
    }
};
export default Component;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

</style>
