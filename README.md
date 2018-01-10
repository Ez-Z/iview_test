# Vue-test(iview)

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

##  初衷
公司的后台需要用vue重构，通过对iview_admin的尝试，发现很多功能比较鸡肋，而且文件夹比较杂乱。所以开始自己重新写一个后台的底层，使用iview框架，同时借鉴了一部分iview_admin的方法，在这里感谢iview作者们的贡献。
## 遇到的问题
1. 页面动态路由与公共下拉导航的联系。借鉴了iview_admin的一些方法，由于其用了vuex来获取，可能会产生一些生命周期和数据为空的问题页面渲染失败，而且并不需要用到面包屑和显示打开页面的部分，所以我这边简化成直接获取页面路由，直接拿到数据来渲染。
2. 未完待续。。。

