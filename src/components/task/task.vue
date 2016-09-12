
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

    }
</script>
