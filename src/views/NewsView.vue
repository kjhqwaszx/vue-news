<template>
<!-- HOC를 사용할 경우 사용하지 않는 컴포넌트
    Mixin을 사용할 경우에는 사용
        (CreateListView.js, ListView.vue) 
-->
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue"
import ListMixin from '../mixins/ListMixin.js'
export default {
  components:{
    ListItem
  },
  mounted(){
    this.$store.commit('SET_LOADING', false)
  }
  // router BeforeEnter에서 데이터 로딩
  // mixins: [ListMixin],
  
/**
 * mixin을 사용해서 news, jobs, ask에서 중복으로 사용하는 created 문 정리
 */
  // created(){
  //   this.$store.commit('SET_LOADING', true)
  //   this.$store.dispatch('FETCH_NEWS')
  // }
}
</script>

<style>

</style>