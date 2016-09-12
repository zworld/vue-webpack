<template>
    <task-list :show-Content="showContent"></task-list>
</template>
<style>
</style>
<script>
//    import html from "./today.html"
    import task from "../task/task.vue"
    export default{
        data(){
            return{
                showContent:{
                    today:true,
                    complete:true,
                    addContent:true,
                }
            }
        },
        components:{
           "task-list":task,
        }
    }
</script>
