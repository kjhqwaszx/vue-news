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
    this.$store.dispatch('FETCH_NEWS')
    
  }
}
</script>

<style>

</style>