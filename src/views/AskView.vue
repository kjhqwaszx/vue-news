<template>
  <div>    
    <!-- this.$store.state.asks 로 접근 가능하지만 Getters 이용 -->
    <p v-for ="item in fetchedAsk" :key="item.title">
        <a :href="item.url"> {{item.title}}</a>
        <small> {{item.time_ago}}, {{item.user}}</small>
    </p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    computed:{
        ...mapGetters({
            fetchedAsk: 'fetchedAsk'
        })
    },
    created(){
        this.$store.dispatch('FETCH_ASK')
    }
}
</script>

<style>

</style>