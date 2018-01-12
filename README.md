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
## 踩坑和填坑
1. 页面动态路由与公共下拉导航的联系。借鉴了iview_admin的一些方法，由于其用了vuex来获取，可能会产生一些生命周期和数据为空的问题页面渲染失败，而且并不需要用到面包屑和显示打开页面的部分，所以我这边简化成直接获取页面路由，直接拿到数据来渲染。
2. 当刷新页面时，iview的Menu组件会收起来，无法记录刷新前选中状态。解决办法：获取路由中当前链接的path，在created钩子中修改 open-name 和 active-name的值，从而实现打开状态的正确渲染。
3. 在2.中的方法不适用于返回操作，所以换了一种方式，使用vuex从router的path中获取openName和activeName，然后在updated中执行$nextTick,在其中使用iview的updateOpened方法，达到刷新和返回都达到预期目的（同时也存在一个问题，返回时候不能达到手风琴，会让subMenu打开多个，待解决）。

