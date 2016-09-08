//添加Vue,router
import Vue from "vue";
import VueRouter from "vue-router";

//添加全局CSS
import bootcss from "./lib/bootstrap/css/bootstrap.min.css";//引入bootstrap
import stylecss from './css/style.css';

//引入路由组件
import menu from './components/menu.vue';
import header from './components/header.vue';

//调用路由
Vue.use(VueRouter);

//设置路由
var router = new VueRouter();
router.map({
   '/index':{
       name:'index',
       component: menu
   }
});

//开启
var Layout = Vue.extend({
    components:{
        'my-menu':menu,
    }
});
router.start(Layout,'#app');
