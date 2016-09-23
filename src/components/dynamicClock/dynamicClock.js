/**
 * Created by zhongxinzhi on 2016/9/23.
 */
import html from "./dynamicClock.html"
import digit from "../../assets/js/digit.json"
export default{
    template: html,
    components: {
    },
    data(){
        return{
        }
    },

    methods: {
    },
    created(){

    },
    ready(){
        var vm = this;
        var el = document.getElementById('clock');
        var clock = el.getContext('2d');
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