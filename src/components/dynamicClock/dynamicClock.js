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
                radius: 3
            },
            color:['red','blue','green']
        }
    },

    methods: {
        renderDigit: function (x,y,num,cxt,color) {

            var vm = this;
            var RADIUS = vm.default.radius;
            var digit = vm.digit;
            var fillColor;
            for(var i = 0; i < digit[num].length; i++){
                for(var j = 0; j < digit[num][i].length; j++){
                    if(j < digit[num][i][j] == 1){
                        fillColor = color[Math.floor(Math.random()*3)];
                        cxt.fillStyle = fillColor;
                        cxt.beginPath();
                        cxt.arc( x+j*2*(RADIUS+1)+(RADIUS+1), y+i*2*(RADIUS+1)+(RADIUS+1), RADIUS, 0, 2*Math.PI);
                        cxt.closePath();
                        cxt.fill()
                    }
                }
            }

        }
    },
    created(){

    },
    ready(){
        var vm = this;
        var el = document.getElementById('clock');
        var cxt = el.getContext('2d');
        //初始化时间
        var now = new Date();
        var time = {
            hour: now.getHours(),
            min: now.getMinutes(),
            sec: now.getSeconds()
        }
        vm.$set('time',time);
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
        console.log(vm.renderDigit(2,2,2,cxt,vm.color))
    },
    watch: {
        'time.now':function(v){

        },
        'time.min':function(val,oldV){
            if(oldV !== undefined){
            }
        }
    }
}