import "./assets/base.scss"

import { vMaska } from "maska"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).directive("maska", vMaska).mount('#app')
