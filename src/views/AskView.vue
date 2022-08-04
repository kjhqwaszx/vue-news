<template>
  <div>
    <div v-for ="item in fetchedAsk" :key="item.title"> {{item.title}}</div>
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