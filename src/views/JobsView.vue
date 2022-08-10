<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue"

export default {
    components:{
    ListItem
  },
  created(){
    this.$store.commit('SET_LOADING', true)
    setTimeout(()=>{
      this.$store.dispatch('FETCH_JOBS')
    },3000)
    
  }
}
</script>

<style>

</style>