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
                    title:"所有",
                    showContent:{
                        today:true,
                        complete:true,
                        addContent:true,
                        highPriority:true,
                        nonPriority:true,
                    }
                }
            }
        },
        components:{
            "task-list":task
        }
    }
</script>
