import { createWebHistory, createRouter } from "vue-router";
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'

import NewsView  from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import createListView from '../views/CreateListView.js'

const routes = [
    {
        path: '/',
        redirect: '/news'
    },
    {
        // path: url 주소
        path: '/news',
        name: 'news',
        
        // url에 표시 될 컴포넌트

        /**
         * Mixin을 사용할 경우 기존 컴포넌트 사용,
         * HOC를 사용할 경우 createListView로 화면 랜더링
         */
        component: NewsView,
        // component: createListView('NewsView')

    },
    {
        path: '/ask',
        name: 'ask',
        component: AskView,
        // component: createListView('AskView')
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: JobsView,
        // component: createListView('JobsView')
    },{
        path:'/item/:id',
        component:ItemView
    },{
        path:'/user/:id',
        component: UserView
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

