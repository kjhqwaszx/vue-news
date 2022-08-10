export default {
    //첫번째 인자는 state로 받고, 두번째 인자로 newsData를 받는다.
    /*
    HOC로 사용하지 않는다.
    SET_NEWS(state, news){
        state.news = news
    },
    SET_JOBS(state, jobs){
        state.jobs = jobs
    },
    SET_AKS(state, ask){
        state.ask = ask
    },
    */
    SET_USER(state, user){
        state.user = user
    },
    SET_ITEM(state, item){
        state.item = item
    },
    SET_LIST(state, list){
        state.list = list
    },
    SET_LOADING(state, isLoading){
        if(isLoading){
            //로딩중
            state.loadingStatus = true
        }else{
            state.loadingStatus = false
        }
    }
 
}