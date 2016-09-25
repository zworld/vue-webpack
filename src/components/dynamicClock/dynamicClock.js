/**
 * Created by zhongxinzhi on 2016/9/23.
 */
import html from "./dynamicClock.html"
import Digit from "../../assets/js/digit.json"

export default{
    template: html,
    components: {
    },
    data(){
        return{
            digit: Digit.digit,
            default: {
                radius: 3,
                left: 20,//时钟画布左边缘
                top:30,//时钟离开画布上边缘
                len: Digit.digit[0].length,
            },
            color:['red','blue','green'],
            balls:[]
        }
    },

    methods: {

        //绘制数字方法
        _renderDigit: function (x,y,num,cxt,color) {
            var vm = this;
            var RADIUS = vm.default.radius;
            var digit = vm.digit;
            var fillColor;
            for(var i = 0; i < digit[num].length; i++){
                for(var j = 0; j < digit[num][i].length; j++){
                    if(digit[num][i][j] == 1){
                        fillColor = color[Math.floor(Math.random()*2)];
                        cxt.fillStyle = fillColor;
                        cxt.beginPath();
                        cxt.arc( x+j*2*(RADIUS+1)+(RADIUS+1), y+i*2*(RADIUS+1)+(RADIUS+1), RADIUS, 0, 2*Math.PI);
                        cxt.closePath();
                        cxt.fill()
                    }
                }
            }
        },

        //添加改变数字小球
        _addBalls: function () {

        },

        //小球动画
        _digitAnimate: function () {

        }
    },
    created(){

    },
    ready(){
        var vm = this;
        var el = document.getElementById('clock');
        var cxt = el.getContext('2d');
        var len = vm.default.len;
        var config = vm.default;
        //初始化时间
        var now = new Date();
        var time = {
            hour: now.getHours(),
            min: now.getMinutes(),
            sec: now.getSeconds()
        }
        vm.$set('time',time);
        vm.$set('cxt',cxt);
        //初始化首次时间显示
        vm._renderDigit(config.left, config.top, Math.floor(vm.time.hour/10), cxt, vm.color);//小时第一个数字
        vm._renderDigit(config.left+len*2*(config.radius+1), config.top, Math.floor(vm.time.hour%10), cxt, vm.color);//小时第二个数字
        vm._renderDigit(config.left+len*4*(config.radius+1), config.top, 10, cxt, vm.color);//冒号
        vm._renderDigit(config.left+len*5*(config.radius+1), config.top, Math.floor(vm.time.min/10), cxt, vm.color);//分钟第一个数字
        vm._renderDigit(config.left+len*7*(config.radius+1), config.top, Math.floor(vm.time.min%10), cxt, vm.color);//分钟第二个数字
        vm._renderDigit(config.left+len*9*(config.radius+1), config.top, 10, cxt, vm.color);//冒号
        vm._renderDigit(config.left+len*10*(config.radius+1), config.top, Math.floor(vm.time.sec/10), cxt, vm.color);//秒第一个数字
        vm._renderDigit(config.left+len*12*(config.radius+1), config.top, Math.floor(vm.time.sec%10), cxt, vm.color);//秒第二个数字
        //设置
        setInterval(function () {
            var now = new Date(),
                hour = now.getHours(),
                min = now.getMinutes(),
                sec = now.getSeconds();
            vm.time.hour == hour? null : vm.time.hour = hour;
            vm.time.min == min? null : vm.time.min = min;
            vm.time.sec = sec;
        },1000)
    },
    //变化改变时间
    watch: {
        'time.sec':function(val,oldV){
            // context.clearRect(x,y,width,height)
            if(oldV !== undefined){
                var vm = this;
                var config = vm.default;
                var clearX1 = config.left + config.len*12*(config.radius+1);
                var clearX2 = config.left + config.len*10*(config.radius+1);
                var clearY = config.top;
                var clearWidth =  vm.digit[0].length*2*(config.radius+1);
                var clearHeight = vm.digit[0].length*2*(config.radius+1)+(config.radius+1)*2;
                //更新秒第二个数字
                vm.cxt.clearRect(clearX1,clearY,clearWidth,clearHeight);
                vm._renderDigit(config.left+config.len*12*(config.radius+1), config.top, Math.floor(vm.time.sec%10), vm.cxt, vm.color);

                // 如果秒第一个数字改变则更新,否则不更新
                if(Math.floor(val/10)!=Math.floor(oldV/10)){
                    vm.cxt.clearRect(clearX2,clearY,clearWidth,clearHeight);
                    vm._renderDigit(config.left+config.len*10*(config.radius+1), config.top, Math.floor(vm.time.sec/10), vm.cxt, vm.color);//秒第一个数字
                }
            }

        },
        'time.min':function(val,oldV){
            if(oldV !== undefined){
            }
        }
    }
}