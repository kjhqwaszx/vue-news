import { createWebHistory, createRouter } from "vue-router";
import NewsView from '../views/NewsView.vue'
import JobsView from '../views/JobsView.vue'
import AskView from '../views/AskView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'

const routes = [
    {
        path: '/',
        redirect: '/news'
    },
    {
        // path: url 주소
        path: '/news',
        // url에 표시 될 컴포넌트
        component: NewsView
    },
    {
        path: '/ask',
        component: AskView
    },
    {
        path: '/jobs',
        component: JobsView
    },{
        path:'/user',
        component: UserView
    },{
        path:'/item',
        component:ItemView
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
