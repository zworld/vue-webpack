<template>
    <task-list :filter="filter"></task-list>
</template>
<style>
</style>
<script>
//    import html from "./today.html"
    import task from "../task/task.vue"
    export default{
        data(){
            return{
                filter:{
                    title:"今天",
                    showContent:{
                        today:true,
                        complete:true,
                        addContent:true,
                    }
                }
            }
        },
        components:{
           "task-list":task,
        }
    }
</script>
