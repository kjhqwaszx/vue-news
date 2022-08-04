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
        }
    },
    mutations,
    actions
})

export default store;