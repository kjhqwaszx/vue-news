<template>
  <div>
    <UserProfile :info="fetchedUserInfo">
      <template v-slot:username>
        <div >{{fetchedUserInfo.id}} </div>
      </template>
      <template v-slot:time>
        <span > {{'Joined ' + fetchedUserInfo.created}},  </span>
      </template>
      <template v-slot:karma>
        <span>{{fetchedUserInfo.karma}}</span>
      </template>
    </UserProfile>   
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import {mapGetters} from 'vuex'
import ToolBar from '@/components/ToolBar.vue'

export default {
  /* eslint-disable */
  components:{
    UserProfile,
    ToolBar
  },
  computed:{
    ...mapGetters(['fetchedUserInfo'])
  },
  created(){
    const userName = this.$route.params.id
    this.$store.dispatch('FETCH_USER', userName)
  }
}
</script>

<style>

</style>