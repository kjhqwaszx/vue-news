<template>
  <div id="ap">
    <tool-bar></tool-bar>
    <!-- <transition name="routing-fade" mode="out-in"> -->
      <router-view ></router-view>
    <!-- </transition> -->
    <!-- vue3 Transition 적용 -->
    <!-- <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view> -->
    <SpinnerTool :loading="getLoadingStatus"></SpinnerTool>

    

  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import SpinnerTool from './components/SpinnerTool.vue'
import {mapGetters} from 'vuex'
export default {

  components:{
    ToolBar,
    SpinnerTool
  },
  methods:{
    startSpinner(){
      this.loadingStatus = true
    },
    endSpinner(){
      this.loadingStatus = false
    }
  },
  computed:{
    ...mapGetters(['getLoadingStatus'])
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
