/**
 * Created by zhongxinzhi on 2016/9/23.
 */
import html from "./dynamicClock.html"
import Digit from "../../assets/js/digit.json"

export default{
    template: html,
    components: {
    },
    props:['fliter'],
    data(){
        return{
            digit: Digit.digit,
            default: {
                radius: 3,
                left: 20,//时钟画布左边缘
                top:30,//时钟离开画布上边缘
                len: Digit.digit[0].length,
            },
            canvas:{
                width:512,
                height:256
            },
            color:['#0066CC','#009999','#33FFFF','#993333','#999966','#CCFFCC','#FFFF66'],
            balls:[],
            updateLoop: false,
            ballAnimate:{
                pending: false,
                ballsLoop:'',
                animateRequest:''
            },
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
                        fillColor = color[1];
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
        _addBalls: function (x,y,num,ballArr) {
            var vm = this;
            for(var i=0; i < vm.digit[num].length; i++){
                for(var j=0; j<vm.digit[num][i].length;j++){
                    if(vm.digit[num][i][j] == 1){
                        var aBall = {
                            x:x+j*2*(vm.default.radius+1)+(vm.default.radius+1),
                            y:y+i*2*(vm.default.radius+1)+(vm.default.radius+1),
                            g:1.5+Math.random(),
                            vx:3*Math.pow( -1 , Math.ceil( Math.random()*1000 ) ) * 4,
                            vy:-10,
                            color: vm.color[ Math.floor( Math.random()*vm.color.length ) ]
                        };
                        ballArr.push( aBall )
                    }
                }
            }
        },

        //绘制时钟方法
        _renderClock: function (config,cxt,color) {
            var vm = this;
            var config = config;
            var cxt = cxt;
            var color = color;
            var len = config.len;
            vm._renderDigit(config.left, config.top, Math.floor(vm.time.hour/10), cxt, vm.color);//小时第一个数字
            vm._renderDigit(config.left+len*2*(config.radius+1), config.top, Math.floor(vm.time.hour%10), cxt, color);//小时第二个数字
            vm._renderDigit(config.left+len*4*(config.radius+1), config.top, 10, cxt, vm.color);//冒号
            vm._renderDigit(config.left+len*5*(config.radius+1), config.top, Math.floor(vm.time.min/10), cxt, color);//分钟第一个数字
            vm._renderDigit(config.left+len*7*(config.radius+1), config.top, Math.floor(vm.time.min%10), cxt, color);//分钟第二个数字
            vm._renderDigit(config.left+len*9*(config.radius+1), config.top, 10, cxt, vm.color);//冒号
            vm._renderDigit(config.left+len*10*(config.radius+1), config.top, Math.floor(vm.time.sec/10), cxt, color);//秒第一个数字
            vm._renderDigit(config.left+len*12*(config.radius+1), config.top, Math.floor(vm.time.sec%10), cxt, color);//秒第二个数字
        },
    },
    created(){

    },
    ready(){

        var vm = this;
        var el = document.getElementById('clock');
        var cxt = el.getContext('2d');
        var len = vm.default.len;
        var config = vm.default;

        //设置画布大小
        el.width = vm.canvas.width;
        el.height = vm.canvas.height;
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
        vm._renderClock(vm.default,vm.cxt,vm.color);
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
            if(oldV !== undefined){
                var vm = this;
                var config = vm.default;
                var x1 = config.left + config.len*12*(config.radius+1);
                var x2 = config.left + config.len*10*(config.radius+1);
                var top = config.top;

                //更新秒第二个数字
                vm._addBalls(x1,config.top,Math.floor(vm.time.sec%10),vm.balls);
                // 如果秒第一个数字改变则更新,否则不更新
                if(Math.floor(val/10)!=Math.floor(oldV/10)){
                    vm._addBalls(x2,config.top,Math.floor(vm.time.sec/10),vm.balls);
                }
            }

        },
        'time.min': function(val,oldV){
            if(oldV !== undefined){
                var vm = this;
                var config = vm.default;
                var x1 = config.left + config.len*7*(config.radius+1);
                var x2 = config.left + config.len*5*(config.radius+1);
                var top = config.top;

                //更新分钟第二个数字
                vm._addBalls(x1,config.top,Math.floor(vm.time.min%10),vm.balls);
                // 如果分钟第一个数字改变怎添加
                if(Math.floor(val/10)!=Math.floor(oldV/10)){
                    vm._addBalls(x2,config.top,Math.floor(vm.time.sec/10),vm.balls);
                }
            }
        },
        'time.hour': function(val,oldV){
            if(oldV !== undefined){
                var vm = this;
                var config = vm.default;
                var x1 = config.left + config.len*2*(config.radius+1);
                var x2 = config.left
                var top = config.top;

                //更新分钟第二个数字
                vm._addBalls(x1,config.top,Math.floor(vm.time.hour%10),vm.balls);
                // 如果分钟第一个数字改变怎添加
                if(Math.floor(val/10)!=Math.floor(oldV/10)){
                    vm._addBalls(x2,config.top,Math.floor(vm.time.hour/10),vm.balls);
                }
            }
        },
        'balls':function (val,oldV) {
            var vm = this;
            var cxt = vm.cxt;
            if(vm.ballAnimate.pending==true){
                clearInterval(vm.ballAnimate.ballsLoop);
                vm.ballAnimate.pending = false;
            }
            if(vm.ballAnimate.pending == false){

                vm.ballAnimate.ballsLoop = setInterval(function(){
                   //画小球
                    cxt.clearRect(0,0,vm.canvas.width,vm.canvas.height);
                    vm._renderClock(vm.default,vm.cxt,vm.color);
                    for(var i = 0; i < vm.balls.length; i++){
                       cxt.beginPath();
                       cxt.arc( vm.balls[i].x , vm.balls[i].y , vm.default.radius , 0 , 2*Math.PI , true );
                       cxt.closePath();
                       cxt.fillStyle = vm.color[Math.floor(Math.random()*vm.color.length)];
                       cxt.fill();
                    }
                    //更新小球

                    for( var i = 0 ; i < vm.balls.length ; i ++ ){
                        vm.balls[i].x += vm.balls[i].vx;
                        vm.balls[i].y += vm.balls[i].vy;
                        vm.balls[i].vy += vm.balls[i].g;
                        //触碰地面后 反弹
                        if( vm.balls[i].y >= vm.canvas.height - vm.default.radius ){
                            vm.balls[i].y = vm.canvas.height - vm.default.radius;
                            vm.balls[i].vy = - vm.balls[i].vy*0.75;
                        }
                    }
                    var cnt = 0
                    for( var i = 0 ; i < vm.balls.length ; i ++ )
                        if( vm.balls[i].x + vm.default.radius > 0 && vm.balls[i].x - vm.default.radius < vm.canvas.width )
                            vm.balls[cnt++] = vm.balls[i]

                    while( vm.balls.length > cnt ){
                        vm.balls.pop();
                    }
                },50);

                // vm.ballAnimate.ballsLoop = function(){
                //     //画小球
                //     cxt.clearRect(0,0,vm.canvas.width,vm.canvas.height);
                //     vm._renderClock(vm.default,vm.cxt,vm.color);
                //     for(var i = 0; i < vm.balls.length; i++){
                //         cxt.beginPath();
                //         cxt.arc( vm.balls[i].x , vm.balls[i].y , vm.default.radius , 0 , 2*Math.PI , true );
                //         cxt.closePath();
                //         cxt.fillStyle = vm.color[Math.floor(Math.random()*vm.color.length)];
                //         cxt.fill();
                //     }
                //     //更新小球
                //
                //     for( var i = 0 ; i < vm.balls.length ; i ++ ){
                //         vm.balls[i].x += vm.balls[i].vx;
                //         vm.balls[i].y += vm.balls[i].vy;
                //         vm.balls[i].vy += vm.balls[i].g;
                //         //触碰地面后 反弹
                //         if( vm.balls[i].y >= vm.canvas.height - vm.default.radius ){
                //             vm.balls[i].y = vm.canvas.height - vm.default.radius;
                //             vm.balls[i].vy = - vm.balls[i].vy*0.75;
                //         }
                //     }
                //     var cnt = 0
                //     for( var i = 0 ; i < vm.balls.length ; i ++ )
                //         if( vm.balls[i].x + vm.default.radius > 0 && vm.balls[i].x - vm.default.radius < vm.canvas.width )
                //             vm.balls[cnt++] = vm.balls[i]
                //
                //     while( vm.balls.length > cnt ){
                //         vm.balls.pop();
                //     }
                //     requestAnimationFrame(vm.ballAnimate.ballsLoop);
                // };
                // requestAnimationFrame(vm.ballAnimate.ballsLoop);
                vm.ballAnimate.pending = true;
            }
        }
    }
}