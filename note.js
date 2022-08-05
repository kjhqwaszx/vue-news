/* 
  [ Vuex ]

  < 구성요소 >
 - state: 여러 컴포넌트에 공유되는 데이터
 - getters: state에 접근하는 속성
 - mutations: state값을 변경하는 이벤트 메서드
 - actions: 비동기 처리 로직을 선언하는 메서드

 */

/*
 ex) Vue2 기준 ( ToDo-App)
 프로젝트가 커질수록 스토어를 모듈화 하여 관리한다.
*/

/**
 * store.js
 */

import todoApp from './modules/todoApp'
export const store = new Vuex.Store({
    modules:{
        todoApp
    }
    
});

/* 
* todoApp.js
*/
const state= {
        todoItems: storage.fetch() // localStroage에서 값을 가져오는 로직
}
const getters= { //첫 번째 인자를 state로 받는다.
    storedTodoItems(state){
        return state.todoItems;
    }
}
const mutations={   //첫 번째 인자를 state로 받는다. 두번째 인자는 payload 형식으로 객체로 받는다.
    addOneItem(state, todoItem){
            console.log('todoItem');
            const obj = {completed: false, item: todoItem}
            localStorage.setItem(todoItem,JSON.stringify(obj))
            state.todoItems.push(obj);
    },
    removeOneItem(state, item){
            localStorage.removeItem(item.todoItem.item)
            state.todoItems.splice(item.index,1)
    },
    toggleOneItem(state,payload){
            state.todoItems[payload.index].completed = ! state.todoItems[payload.index].completed
            localStorage.removeItem(payload.todoItem.item)
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
    },
    clearAllItems(state){
            localStorage.clear();
            state.todoItems = [];
    }
}
/**
 actions 내용은 vue-news쪽 참고. (vue-news는 vue3지만, 구성은 동일)
 */
export default {
    state,
    getters,
    mutations
}


/**
 [helper 함수]

  각각의 컴포넌트에서 store속에서 접근하기 위해서는 아래와 같이 타이핑을 해주어야 한다.
  - state: this.$store.state.접근대상
  - getters: this.$store.getters.접근대상
  - mutations: this.$store.commit('접근대상', {payload})

  helper함수를 이용하면 좀 더 간단하게 접근가능하도록 도와준다.
  (state > mapState), (getters > mapGetters), (mutations > mapMutations), (actions > mapActions)
  (mapState, mapGetters)는 각각의 컴포넌트의 computed영역에 선언하고, (mapMutations, mapActions)는 methods 영역에 선언해준다.

*/ 

/*

ex) ToDo-App

import{ mapState, mapGetters, mapMutations } from 'vuex'

  export default {
    computed:{
        ...mapState(['num', 'text'])
        // num(){return this.$store.state.num}
        // text(){return this.$store.state.text}

        ...mapGetters(['storedTodoItems'])

        // todoItems(){
        //     return this.$store.getters.storedTodoItems
        // }
        
    },

    methods:{
        
        // 배열형으로 helper 선언
        // ...mapMutations(['removeOneItem','toggleOneItem']),
        
        //객체형 helper 선언 ( 이름을 다르게 할 경우)
        ...mapMutations({
            removeTodo: 'removeOneItem', // 인자들은 자동으로 넘어간다.
            toggleComplete: 'toggleOneItem'
        }),    

        //  helper 함수를 사용해 변경함.
        // removeTodo(item){
        //     this.$store.commit('removeOneItem',item)
        // },
        // toggleComplete(todoItem, index){
        //     this.$store.commit('toggleOneItem',{todoItem, index})
        // }
        
    }

    
}

*/