import { createApp } from 'vue'
import App from './App.vue'
import vue3dLoader from './index'


/* vue2 */
// import vue3dLoader from "vue-3d-loader";
// Vue.use(vue3dLoader)

createApp(App).use(vue3dLoader).mount('#app')
