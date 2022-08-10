<template>
<!-- HoC로 사용 안하는 컴포넌트(CreateListView.js, ListView.vue) -->
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