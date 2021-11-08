import './styles/main.css'
import './styles/style.css'
import './styles/header.css'
import './styles/footer.css'
import './assets/20152310142330.png'
import './assets/ae973f6678e037cd297053384aa7dca0.png'
import './assets/image-19.png'
import './assets/painting-63186_1280.png'
import './assets/1.jpg'
import './assets/2.jpg'
import './assets/3.jpg'
import './assets/4.jpg'
import './assets/5.jpg'
import './assets/6.jpg'
import './assets/7.jpg'
import './assets/8.jpg'
import './assets/9.jpg'
import Vue from 'vue'
import App from './app.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
new Vue({
    el:"#app",
    render:(h)=>h(App)
})