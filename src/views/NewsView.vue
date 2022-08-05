<template>
  <div>
    <!-- this.$store.state.news 로 접근 가능하지만 Getters 이용 -->
    <p v-for ="item in fetchedNews" :key="item.title">
        <a :href="item.url"> {{item.title}}</a>
        <small>  {{item.time_ago}} by {{item.user}}</small>
    </p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed:{
      ...mapGetters({
        fetchedNews : 'fetchedNews'
      })
    },
    created(){
        this.$store.dispatch('FETCH_NEWS')
    }
}
</script>

<style>

</style>