<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div class="user-container">
        <div>
           <i class="fas fa-user-circle"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchedItemInfo.user}`">
            {{fetchedItemInfo.user}}
          </router-link>
          <div class="time">
            {{fetchedItemInfo.time_ago}}
          </div>
        </div>
      </div>
      <h2>
        {{fetchedItemInfo.title}}
      </h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div :html="fetchedItemInfo.comment">
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {

  computed:{
    ...mapGetters(['fetchedItemInfo'])
  },
  created(){
    const askId = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', askId)
    console.log('####', JSON.stringify(this.$store.state.item))
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