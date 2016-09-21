<script>
    import datepicker from "../../assets/lib/datetimepicker/js/bootstrap-datetimepicker.min.js"
    import datepicker_ZH from "../../assets/lib/datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN.js"
    import datepickerCSS from "../../assets/lib/datetimepicker/css/bootstrap-datetimepicker.css"
    import html from "./task.html"
    export default{
        template:html,
        props:['filter'],
        components:{
        },
        data(){
            var addDate = new Date();
            return{
                format:"yyyy/dd/MM/",
                taskMsg:{
                    addMsg:'',
                    addDate: addDate,
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
                if(msg.addMsg){
                    var vm =this;
                    var disTime = new Date().getTime() - new Date(msg.addDate);

                    if(0<disTime<1000*60*60*24){
                        vm.taskMsg.todayList.data.push({
                            item:msg.addMsg,
                            tag:'td',
                            date: new Date(msg.addDate)
                        });
                    }else if(1000*60*60*24<disTime<1000*60*60*24*7){
                        vm.taskMsg.weekList.data.push({
                            item:msg.addMsg,
                            tag:'week',
                            date: new Date(msg.addDate)
                        });
                    }else{
                        vm.taskMsg.nonPriorList.data.push({
                            item:msg.addMsg,
                            tag:'np',
                            date: new Date(msg.addDate)
                        });
                    }
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
            }
        },
        ready(){
            var vm = this;
            var option = {
                autoclose: true,
                startDate:18,
                format: 'yyyy-mm-dd hh:ii:ss',
                language:'zh-CN',
                weekStart: 1,
                todayBtn:  1,
                autoclose: 1,
                todayHighlight: 1,
                startView: 2,
                forceParse: 0,
                showMeridian: 1

            }
            $('#datepicker').datetimepicker(option).on('changeDate',function(){
                vm.taskMsg.addDate = $('#datetimepicker').datetimepicker('getStartDate')
            });
        }

    }
</script>
