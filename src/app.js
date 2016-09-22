//添加Vue,router
import Vue from "vue";
import VueRouter from "vue-router";
import VueStrap from  "vue-strap"

//添加全局CSS
import bootcss from "./assets/lib/bootstrap/css/bootstrap.min.css";//引入bootstrap
import stylecss from './assets/css/style.css';

//引入路由组件
import today from './components/today/today'
import all from './components/all/all.vue'
import menu from './components/menu/menu.vue';
import week from './components/week/week.vue';
import month from './components/month/month.vue';
import task from './components/task/task.vue';

//调用路由
Vue.use(VueRouter);

Vue.config.devtools = true;

//设置路由
var router = new VueRouter();
router.map({
   '/today':{
       name:'today',
       component: today
   },
    '/all':{
        name:'all',
        component:all
    },
    '/week':{
        name:'week',
        component: week
    },
    '/month':{
        name:'month',
        component: month
    }
});

//开启
var Layout = Vue.extend({
    components:{
        'my-menu':menu,
    }
});
router.start(Layout,'#app');
