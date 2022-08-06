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
            item:[]
        }
    },
    getters:{
        fetchedAsk(state){
            return state.ask;
        },
        fetchedNews(state){
            return state.news
        },
        fetchedUserInfo(state){
            return state.user
        },
        fetchedItemInfo(state){
            return state.item
        }
    },
    mutations,
    actions
})

export default store;