import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store/info';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import "@/components/font.css"

const app = createApp(App);
app.config.productionTip = false; 
window.Kakao.init("e349724d5bdb90952c8f2f22e1419693");
app.use(VueAxios, axios);
app.use(router);
app.use(store);

app.mount('#app');

