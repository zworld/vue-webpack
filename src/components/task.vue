<template>
    <div class="content-container">
        <div class="task-wrap">
           <div>
               <div class="title">今天</div>
               <div class="task-add">
                   <input placeholder="输入任务" v-model="taskMsg.msg" @keyup.enter="addTask" >
                   <div class="add-task-tool">
                       <span class="glyphicon glyphicon-calendar"></span>
                       <span class="glyphicon glyphicon-calendar"></span>
                       <span class="glyphicon glyphicon-calendar"></span>
                   </div>
               </div>
           </div>
        </div>
        <div class="task-list-container">
            <div>
                <div  data-toggle="collapse" data-target="#demo" class="list-toggle">
                    <i class="toggle-icon glyphicon glyphicon-chevron-right"></i>
                    <div class="toggle-item clearfloat">
                        <div class="toggle-date">今天</div>
                        <div class="toggle-acount">2</div>
                    </div>
                </div>
                <div id="demo" class="collapse">
                    <ul class="every-list-container">
                        <li v-for="elist in todayList">
                            <input type="checkbox" @change="achiveTask()">
                            <span>{{elist.taskMsg}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>
<style>
    @import '../assets/css/task.css';
</style>
<script>
    import tasklist from './tasklist.vue'
    import VueStrap from 'vue-strap'
    export default{
        data(){
            return{
                taskMsg:{
                    msg:'',
                    date:'',
                },
                todayList:[
                    {
                        taskMsg: 'testtte'
                    },
                    {
                        taskMsg: '123'
                    }
                ]
            }
        },
        methods:{
            addTask(){
                alert(this.taskMsg.msg)
            },
            achiveTask(){
                alert('test')
            }
        },

        components:{
            "task-list": tasklist,
            "alert":VueStrap.alert,
        }
    }
</script>
