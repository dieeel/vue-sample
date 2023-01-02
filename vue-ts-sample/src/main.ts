import { createApp } from 'vue'
import App from './App.vue'

import './style.css'
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'

const app = createApp(App)

app.use(VueGoodTablePlugin);

app.mount('#app')
