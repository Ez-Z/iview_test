<template>
	<Modal
        :value="isShow"
        title="修改"
        @on-ok="ok"
        @on-cancel="cancel"
        class-name="vertical-center-modal aaa"
        >
        <!-- <p
		v-for="(item, key) in modelData"
        :key="item.name"
        >
        	{{key}}: {{item}}
        </p> -->
        
		<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
			<FormItem label="Name" prop="name">
				<Input v-model="formValidate.name" placeholder="Enter your name"></Input>
			</FormItem>
			<FormItem label="E-mail" prop="mail">
				<Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
			</FormItem>
			<FormItem label="City" prop="city">
				<Select v-model="formValidate.city" placeholder="Select your city">
					<Option value="beijing">beijing</Option>
					<Option value="shanghai">shanghai</Option>
					<Option value="shenzhen">shenzhen</Option>
				</Select>
			</FormItem>
			<FormItem label="Date">
				<Row>
					<Col span="11">
						<FormItem prop="date">
							<DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
						</FormItem>
					</Col>
					<Col span="2" style="text-align: center">-</Col>
					<Col span="11">
						<FormItem prop="time">
							<TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
						</FormItem>
					</Col>
				</Row>
			</FormItem>
			<FormItem label="Content" prop="content">
				<quill-editor
				ref="QuillEditor"
				:options="editorOption"
				v-model="formValidate.content"
				>
				</quill-editor>
			</FormItem>
			<FormItem label="Gender" prop="gender">
				<RadioGroup v-model="formValidate.gender">
					<Radio label="male">Male</Radio>
					<Radio label="female">Female</Radio>
				</RadioGroup>
			</FormItem>
			<FormItem label="Hobby" prop="interest">
				<CheckboxGroup v-model="formValidate.interest">
					<Checkbox label="Eat"></Checkbox>
					<Checkbox label="Sleep"></Checkbox>
					<Checkbox label="Run"></Checkbox>
					<Checkbox label="Movie"></Checkbox>
				</CheckboxGroup>
			</FormItem>
			<FormItem label="Desc" prop="desc">
				<Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
			</FormItem>
			
		</Form>
		<div slot="footer">
            <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
			<Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
        </div>
    </Modal>	
</template>

<script>
// import { Button } from 'iview';



let Component = {
    name: 'orderPopup',
    components: {

    },
    props:[
		'isShow',
		// 'modelData'
	],
	data () {
		return {
        	editorOption: {
				modules: {
					toolbar: [
						['bold', 'italic', 'underline', 'strike'],
						['blockquote', 'code-block']
					]
				}
			},
			formValidate: {
				name: '',
				mail: '',
				city: '',
				content: '',				
				gender: '',
				interest: [],
				date: '',
				time: '',
				desc: ''
			},
			ruleValidate: {
				name: [
					{ required: true, message: 'The name cannot be empty', trigger: 'blur' }
				],
				mail: [
					{ required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
					{ type: 'email', message: 'Incorrect email format', trigger: 'blur' }
				],
				city: [
					{ required: true, message: 'Please select the city', trigger: 'change' }
				],
				gender: [
					{ required: true, message: 'Please select gender', trigger: 'change' }
				],
				interest: [
					{ required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
					{ type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
				],
				date: [
					{ required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
				],
				time: [
					{ required: true, type: 'date', message: 'Please select time', trigger: 'change' }
				],
				desc: [
					{ required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
					{ type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
				]
			}
		};
	},
	created(){

	},

	methods: {
		ok () {
			this.$refs["formValidate"].resetFields();			
			this.$Message.info('Clicked ok');
			this.$emit('togglePopup', {btn: 'ok', num: 1, content: this.content});
			this.content = "";
        },
        cancel () {
			this.$refs["formValidate"].resetFields();			
            this.$Message.info('Clicked cancel');
			this.$emit('togglePopup', {btn: 'cancel', num: 0, formObj: this.$refs["formCustom"]});
			this.content = "";
		},
		handleSubmit (name) {
			this.$refs[name].validate((valid) => {
				if (valid) {
					console.table(this.formValidate);
					this.$Message.success('Success!');
				} else {
					this.$Message.error('Fail!');
				}
			});
		},
		handleReset (name) {
			this.$refs[name].resetFields();
		},
	},
	mounted(){
		this.$nextTick(function () {
			this.content = "";
		});
	}
};
export default Component;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
	.aaa .ivu-modal-body {
		height: 400px;
		overflow: auto;
	}
</style>
