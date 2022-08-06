export default {
    //첫번째 인자는 state로 받고, 두번째 인자로 newsData를 받는다.
    SET_NEWS(state, news){
        state.news = news
    },
    SET_JOBS(state, jobs){
        state.jobs = jobs
    },
    SET_AKS(state, ask){
        state.ask = ask
    },
    SET_USER(state, user){
        state.user = user
    },
    SET_ITEM(state, item){
        state.item = item
    }
 
}