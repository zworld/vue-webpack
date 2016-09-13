<script>
    import VueStrap from 'vue-strap'
    import html from "./task.html"
    export default{
        template:html,
        props:['filter'],
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
                                item: 'testtte',
                                tag:'td'
                            },
                            {
                                item: 'testtte',
                                tag:'td'
                            }
                        ]
                    },
                    weekList:{
                        title:"最近一周",
                        data:[
                            {
                                item: 'tes3234ttte',
                                tag:'week'
                            },
                            {
                                item: '23',
                                tag:'week'
                            }
                        ]
                    },
                    monthList:{
                        title:"最近一月",
                        data:[
                            {
                                item: 'tes3234ttte',
                                tag:'month'
                            },
                            {
                                item: '23',
                                tag:'month'
                            }
                        ]
                    },
                    highPriorList:{
                        title:"高优先级",
                        data:[
                            {
                                item:"test",
                                tag:'hp'
                            },
                            {
                                item:"test2",
                                tag:'hp'
                            }
                        ]
                    },
                    nonPriorList:{
                        title:"无优先级",
                        data:[
                            {
                                item:"test",
                                tag:'np'
                            },
                            {
                                item:"test2",
                                tag:'np'
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
            achiveTask(i,item,obj){
                var vm =this;
                vm.taskMsg[obj].data.splice(i,1);
                vm.taskMsg.completeList.data.push(item);
            },
            unachiveTask(i,item){
                var vm = this;
                var tag = item.tag;
                switch (tag){
                    case "td":
                        tag = 'todayList';
                        break
                    case "week":
                        tag = 'weekList';
                        break
                    case "month":
                        tag = 'monthList'
                         break
                    case "hp":
                        tag = 'highPriorList';
                        break
                    case "np":
                        tag = 'nonPriorList'
                        break
                    default:
                            tag = 'highPriorList'
                }
                vm.taskMsg.completeList.data.splice(i,1);
                vm.taskMsg[tag].data.push(item);
                debugger
            }
        }

    }
</script>
