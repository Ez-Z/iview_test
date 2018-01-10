# Vue-test(mintUI)

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3333
npm run dev
npm start

# mock serve with hot reload at localhost:3001
npm run mock

# build for production with minification(test)
npm run build:test

# build for production with minification(production)
npm run build:prod

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##  遇到的坑和自己的解决方案

首先，本人不习惯官方的ESLint 的配置，本人是一个TAB党（4空格的），有点无法忍受空格在编辑器全选时候密集的点和2个空格的紧凑。然后习惯性在语句结尾加”;“分号。至于其他一些前后空格之类的无关紧要，一般在写完一个文件或者在看着不舒服的时候使用sublime的格式化插件，进行格式化。

```javascript
module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
	},
	// required to lint *.vue files
	plugins: [
		'html'
	],
	// add your custom rules here
	'rules': {
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		"quotes": 0,
		"no-console": 0,
		"no-debugger": 1,
		"no-var": 1,
		"import/named": 0,
		"semi": [1, "always"],
		"no-trailing-spaces": 0,
		"eol-last": 0,
		"no-underscore-dangle": 0,
		"no-alert": 0,
		"no-lone-blocks": 0
	},
};
```



以上是我的一些简单配置，后期会根据实际开发和组员的习惯进行完善。



### vuex的尝试

在vuex的尝试上，我看了官方提供的例子cart和todolist，发现与redux有很多相似的地方，所以入门相对比较快。在项目中，我整合了cart的例子，进行了一些修改，出于对redux使用的习惯和工程化的考虑，加入了一些自己的想法和计划：1.一个页面对应一个module，一个module中如果state、getter、action、mutations篇幅太长太复杂，可以单独分解成4个js文件，在当前环境中，没有分开，给初学者一些缓冲。 2.一些公共的方法通过common的js来配置。3.通过实际开发考虑后期会修改工程化。

在例子中已经使用模拟服务器进行模拟异步请求操作。

### express 模拟服务器

官方cli整合了express就想到用其来作为一个模拟服务器来模拟数据和请求。

为了避免node服务器内容更新而需要手动重启，我使用了node-dev来进行热重启操作（需要在全局安装node-dev）

```bush
$ npm i -g node-dev
```



模拟服务器就会存在跨域的问题，环境使用了CORS来解决跨域。

```javascript
//allow custom header and CORS
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
```

使用了一个apis对象来进行动态绑定数据和接口

```javascript
// apis.js
const apis= {
	'/products': require('./data/cart')
};

module.exports = apis;
//app.js
...
var apis = require('./apis');
...
for(var key in apis){
	app.all(key, function (req, res) {
			res.send(apis[key]);
	});
}//这边为了方便所以用all来定，如果有特殊需求或者使用restful标准，可以通过一些key值来设置请求方式。具体参看express文档
...
```



环境中已经安装了mockjs后期会使用mockjs来模拟数据。

### 使用环境变量来配置请求地址，后期会加入cdn地址等

```javascript
// util/url.js
let webUrl = 'http://localhost:3001';

if ("production" == process.env.NODE_ENV) {
	if ("prod" == process.env.PATH_ENV) {
		webUrl = 'http://localhost:3002';
	}else{
		/*测试环境*/
		webUrl = 'http://localhost:3003';
	}
}
export default {
	webUrl
};

// webpack配置 build/webpack.prod.conf.js
const PATH_ENV = process.env.PATH_ENV;
...
plugins: [
	// http://vuejs.github.io/vue-loader/en/workflow/production.html
	new webpack.DefinePlugin({
		'process.env.NODE_ENV': env.NODE_ENV,
		'process.env.PATH_ENV': JSON.stringify(PATH_ENV)
	}),
  	...	
]
...

// package.json
...
"scripts": {
    ...
    "build:prod": "set PATH_ENV=prod&& node build/build.js",
    "build:test": "set PATH_ENV=test&& node build/build.js",
    ...
},
...
```



### 计划

根据实际开发需要会加入更多公用方法。

尝试配置自己的webpack环境。

使用mockjs模拟数据。

加入一些好用的插件。



综上所述，以上都是本人的一些整理他人方法和加入自己想法的集合，希望有些帮助# iview_test
