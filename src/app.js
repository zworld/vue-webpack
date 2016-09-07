//添加Vue,router
import Vue from "vue";
import VueRouter from "vue-router";

//添加全局CSS
import stylecss from './css/style.css';

//引入路由组件

//调用路由
Vue.use(VueRouter);

//设置路由
var router = new VueRouter();
router.map({

});

//开启
var Layout = Vue.extend({
    template:'<h1>index</h1>',
    //是否取代挂载点
    replace: false
});
router.start(Layout,'#app');
