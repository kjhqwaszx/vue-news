<template>
  <div>
    <p>name: {{this.fetchedUserInfo.id}}</p>
    <p>karma: {{this.fetchedUserInfo.karma}}</p>
    <p>created: {{this.fetchedUserInfo.created}}</p>
    <p>about: {{this.fetchedUserInfo.about}}</p>

    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed:{
    ...mapGetters(['fetchedUserInfo'])
  },
  created(){
    const userName = this.$route.params.id
    this.$store.dispatch('FETCH_USER', userName)
    console.log('####', JSON.stringify(this.$store.state.user))
  }
}
</script>

<style>

</style>