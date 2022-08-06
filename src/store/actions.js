import {fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemInfo } from '../api/index.js'
export default{
    // API를 통해 받아온 데이터를 mutation을 통해 update해준다
    // 이때 context.commit을 통해 Mutation에 접근할 수 있다.
    FETCH_NEWS(context){
        fetchNewsList().then(response =>{
            context.commit('SET_NEWS', response.data)
            console.log('newsStore', response.data)
            })
        .catch(error => console.log(error))
    },
    FETCH_JOBS(context){
        fetchJobsList().then(response =>{
            context.commit('SET_JOBS',response.data)
            console.log('jobsStore', response.data)
        })
        .catch(error => console.log(error))
    },
    FETCH_ASK(context){
        fetchAskList().then(response=>{
            context.commit('SET_AKS',response.data)
            console.log('askStore', response.data)
        })
        .catch(error => console.log(error))
    },
    FETCH_USER(context,userName){
        fetchUserInfo(userName).then(response=>{
            context.commit('SET_USER',response.data)
            console.log('userStore', response.data)
        })
        .catch(error => console.log(error))
    },
    FETCH_ITEM(context,askId){
        fetchItemInfo(askId).then(response=>{
            context.commit('SET_ITEM',response.data)
            console.log('itemStore', response.data)
        })
        .catch(error => console.log(error))
    }

    
    
}