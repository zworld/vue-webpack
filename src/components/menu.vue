<template>
    <div class="menu">
       <div class="user-info clearfloat">
           <div class="user-portrait">
               <img src="../images/portrait.jpg">
           </div>
           <div class="user-name"><a href="#">zworld</a></div>
           <div class="user-tool">
               <a href="#"><span  class="glyphicon glyphicon-search"></span></a>
               <a href="#"><span  class="glyphicon glyphicon-envelope"></span></a>
           </div>
       </div>
        <div class="item-list-container">
            <ul class='menu-list'>
                <li class="list-item">
                    <div class="item-left">
                    </div>
                    <div class="count-tag">
                    </div>
                </li>
                <li class="list-item">
                </li>
                <li class="list-item">
                </li>
            </ul>
        </div>
    </div>
</template>
<style>

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
