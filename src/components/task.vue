<template>
    <div class="content-container">
        <div class="task-wrap">
           <div>
               <div class="title">今天</div>
               <div class="task-add">
                   <input placeholder="输入任务">
                   <div class="add-task-tool">
                       <span class="glyphicon glyphicon-calendar"></span>
                       <span class="glyphicon glyphicon-calendar"></span>
                       <span class="glyphicon glyphicon-calendar"></span>
                   </div>
               </div>
           </div>
        </div>
    </div>
</template>
<style>
    @import  '../css/task.css';
</style>
<script>
//    import HeaderComponent from './components/header.vue'
//    import OtherComponent from './components/other.vue'
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{

        }
    }
</script>
