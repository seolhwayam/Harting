import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store/info';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import "@/components/font.css"
import '@fortawesome/fontawesome-free/css/all.css';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';



const app = createApp(App);
app.config.productionTip = false; 
window.Kakao.init("e349724d5bdb90952c8f2f22e1419693");
app.use(VueAxios, axios);
app.use(router);
app.use(store);
app.use(VCalendar);
app.use(VueSweetalert2);

app.mount('#app');

