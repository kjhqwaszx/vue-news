<template>
<!-- HoC로 사용 안하는 컴포넌트 (News, Jobs, Ask는 기능이 비슷한 컴포넌트이기 때문에 routs에서 ListView 로 대체해준다. ) -->
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
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style>

</style>