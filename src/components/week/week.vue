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
                    title:"最近一周",
                    showContent:{
                        complete:true,
                        addContent:true,
                        week:true
                    }
                }
            }
        },
        components:{
            "task-list":task,
        }
    }
</script>
