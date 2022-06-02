import { createApp } from 'vue';
import App from './App.vue';
import '@/styles/app.css';
import router from './config/route/route';
import store from './config/store/store';


const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
