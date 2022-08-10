import ListView from './ListView.vue'
import { h } from 'vue'

export default function createListView(pageName){
  // Hoc ( High Order Component로 중복된 News, Jobs, Ask 컴포넌트 대체)
  return{
    //재사용 할 컴포넌트(인스턴스) 옵션들이 들어갈 자리
    name: pageName, // 만들어질 컴포넌트 이름(NewView, JobsView, AskView)
    created(){
      
      this.$store.commit('SET_LOADING', true)
      setTimeout(()=>{
        this.$store.dispatch('FETCH_LIST',this.$route.name)
      },3000)
    },
    render(){
      return h(ListView);
    }
  }
}