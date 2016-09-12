/**
 * Created by zhongxinzhi on 2016/9/12.
 */
<style>
@import "./menu.css";
</style>
<script>
import html from "./menu.html";

export default{
    template:html,
    components:{
    },

    data(){
        return{
            allList: [
                {
                    icon:  'glyphicon-envelope',
                    title: '所有',
                    count: 20,
                },
                {
                    icon:  'glyphicon-th-list',
                    title: '今天',
                    count: 20,
                },
                {
                    icon:  'glyphicon-th-large',
                    title: '最近七天',
                    count: 20,
                },
                {
                    icon:  'glyphicon-th-large',
                    title: '最近一月',
                    count: 20,
                },
            ],
            menuToggle: {
                toggleStatus:'on',
                toggleIcon:"glyphicon-chevron-left",
            }
        }
    },

    methods: {
        toggle(){
            var vm = this;
            if(vm.menuToggle.toggleStatus == "on"){
                vm.menuToggle.toggleStatus = "off";
                $('.main').animate({left:"130px"},600,function () {
                    vm.menuToggle.toggleIcon = "glyphicon-chevron-right";
                    $('.menu-toggle').css('right','133px')
                })
            }else {
                vm.menuToggle.toggleStatus = "on";
                $('.main').animate({left:"260px"},600);
                $('.menu-toggle').animate({right:"2px"},600,function (){
                    vm.menuToggle.toggleIcon = "glyphicon-chevron-left";
                })

            }
        }
    }
}
</script>