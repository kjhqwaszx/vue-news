<template>
  <div id="ap">
    <tool-bar></tool-bar>
    <!-- vue3 Transition 적용 -->
    <router-view v-slot="{ Component }">
      <transition name="routing-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- <transition name="routing-fade" mode="out-in">
      <router-view ></router-view>
    </transition> -->

  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
export default {

  components:{
    ToolBar
  },
  methods:{
    fetchData(){
      console.log('hellod');
    }
  }  
}
</script>

<style>

body{
  padding: 0;
  margin: 0;
}

a{
  color: #34495e;
  text-decoration: none;
  
}
a:hover{
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active{
  text-decoration: underline;
}
/* Router Transition */
.routing-fade-enter-active, .routing-fade-leave-active {
  transition: opacity .3s ease;
}
.routing-fade-enter, .routing-fade-leave-to
/* .routing-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
