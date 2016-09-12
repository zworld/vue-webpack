
<style>
    @import  './task.css';
</style>
<script>
    import VueStrap from 'vue-strap'
    import html from "./task.html"
    export default{
        template:html,
        components:{
            "alert":VueStrap.alert,
        },
        data(){
            return{
                taskMsg:{
                    addMsg:'',
                    addDate:'',
                    todayList:{
                        title:"今天",
                        data:[
                             {
                                 item: 'testtte'
                             },
                            {
                                item: 'testtte'
                            }
                        ]
                    },
                    completeList:{
                        title:"已完成",
                        data:[
                            {
                                item:'test'
                            },
                            {
                                item:'test'
                            }
                        ],
                    }
                }
            }
        },
        methods:{
            addTask(msg){
                if(msg){
                    var vm =this;
                    vm.taskMsg.todayList.data.push({item:msg});
                    vm.taskMsg.addMsg = "";
                }
            },
            achiveTask(i,item){
                var vm =this;
                vm.taskMsg.todayList.data.splice(i,1);
                vm.taskMsg.completeList.data.push(item);
            },
            unachiveTask(i,item){
                var vm = this;
                vm.taskMsg.completeList.data.splice(i,1);
                vm.taskMsg.todayList.data.push(item);
            }
        }


    }
</script>
