<template>
  <div>
    <section>
      <UserProfile>
        <template v-slot:username>
          <router-link :to="`/user/${fetchedItemInfo.user}`">
          {{fetchedItemInfo.user}}
        </router-link>
        </template>
        <template v-slot:time>
          {{'Posted ' + fetchedItemInfo.time_ago}}
        </template>
      </UserProfile>
    </section>
    <section>
      <h2>    
        {{fetchedItemInfo.title}}
      </h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItemInfo.content">
      </div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import {mapGetters} from 'vuex'

export default {
  components:{
    UserProfile
  },
  computed:{
    ...mapGetters(['fetchedItemInfo'])
  },
  created(){
    const askId = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', askId)
  }
}
</script>

<style scoped>
.user-container{
  display:flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user-circle{
  font-size: 2.5rem;
}
.user-description{
  padding-left:8px;
}
.time{
  font-size: 0.7rem;
}

</style>