import './bootstrap';

import { createApp } from 'vue';
import App from './app/app.vue';
import router from './router/index';
import HomePage from './components/home-page/home-page';

const app = createApp(App)
app.use(router)
app.component('home-page', HomePage)
app.mount('#app')

export default { app }