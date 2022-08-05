import {createStore} from 'vuex'

import mutations from './mutations.js'
import actions from './actions.js'
const store = createStore({
    state(){
        return{
            news:[],
            jobs:[],
            ask:[]
        }
    },
    getters:{
        fetchedAsk(state){
            return state.ask;
        },
        fetchedNews(state){
            return state.news
        }
    },
    mutations,
    actions
})

export default store;