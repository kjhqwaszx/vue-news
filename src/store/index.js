import {createStore} from 'vuex'

import mutations from './mutations.js'
import actions from './actions.js'
const store = createStore({
    state(){
        return{
            news:[],
            jobs:[],
            ask:[],
            user:{},
            item:[],
            loadingStatus:false
        }
    },
    getters:{
        fetchedAsk(state){
            return state.ask;
        },
        fetchedNews(state){
            return state.news
        },
        fetchedJobs(state){
            return state.jobs
        },
        fetchedUserInfo(state){
            return state.user
        },
        fetchedItemInfo(state){
            return state.item
        },
        getLoadingStatus(state){
            return state.loadingStatus
        }
    },
    mutations,
    actions
})

export default store;