import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from './store/index.js'
// new Vue({
//     render: h=>h(App),
//     router
// }).$mount('#app')

createApp(App).use(router)
    .use(store).mount('#app')
