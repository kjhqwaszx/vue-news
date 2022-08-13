import {fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index.js'
export default{
    // API를 통해 받아온 데이터를 mutation을 통해 update해준다
    // 이때 context.commit을 통해 Mutation에 접근할 수 있다.

    /*HOC로 사용하지 않음 
    //Promise 버전

    FETCH_NEWS(context){
        fetchNewsList().then(response =>{
            context.commit('SET_NEWS', response.data)
            })
        .catch(error => console.log(error))
        context.commit('SET_LOADING', false)
    },
    FETCH_JOBS(context){
        fetchJobsList().then(response =>{
            context.commit('SET_JOBS',response.data)
        })
        .catch(error => console.log(error))
        context.commit('SET_LOADING', false)
    },
    FETCH_ASK(context){
        fetchAskList().then(response=>{
            context.commit('SET_AKS',response.data)
        })
        .catch(error => console.log(error))
        context.commit('SET_LOADING', false)
    },
    */
       
   /**
    *async 버전 
    */
    async FETCH_NEWS(context){
        try{
            const response = await fetchNewsList()
            context.commit('SET_NEWS', response.data)
            context.commit('SET_LOADING', false)

            return response
        }catch(error){
            context.commit('SET_LOADING', false)

            console.log(error)
        }
    },
    async FETCH_JOBS(context){
        try{
            const response = await fetchJobsList()
            context.commit('SET_JOBS',response.data)
            context.commit('SET_LOADING', false)
            return response
        }catch(error){
            context.commit('SET_LOADING', false)
            console.log(error)
        }
    },
    async FETCH_ASK(context){
        try{
            const response = await fetchAskList()
            context.commit('SET_AKS',response.data)
            context.commit('SET_LOADING', false)    
            return response
        }catch(error){
            context.commit('SET_LOADING', false)
            console.log(error)
        }
        
        
    },

    FETCH_USER(context,userName){
        return fetchUserInfo(userName).then(response=>{
            context.commit('SET_USER',response.data)
        })
        .catch(error => {
            console.log(error)
        })
        
    },
    FETCH_ITEM(context,askId){
        return fetchItemInfo(askId).then(response=>{
            context.commit('SET_ITEM',response.data)
        })
        .catch(error => {
            console.log(error)
        })
        
    },
    // FETCH_LIST(context, pageName){
    //     // return을 해주어야 비동기 순서가 보장된다. ( action은 원래 비동기 메서드 역할)
    //     return fetchList(pageName).then(response=>{
    //         context.commit('SET_LIST',response.data)
    //         return response
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }
    async FETCH_LIST(context, pageName){
        // return을 해주어야 비동기 순서가 보장된다. ( action은 원래 비동기 메서드 역할)
        try {
            const response = await fetchList(pageName)    
            context.commit('SET_LIST',response.data)
            return response
        } catch (error) {
            console.log(error)
        }
    }
}