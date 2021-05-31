import { createApp } from 'vue';
import App from './Main.vue';
import router from "./router.js";
import { createI18n } from "vue-i18n/dist/vue-i18n.esm-bundler.js";
import { VueCookieNext } from "vue-cookie-next";

const locale_data = {
    english: {
        brand: {
            name: "Aethex"
        },
        text: {
            "Navigation": "Navigation"
        }
    },
    ran: {
        test: "ran is a language?"
    }
}

const i18n =  createI18n({
    globalInjection: true,
    legacy: false,
    locale: 'english',
    messages: locale_data
});

const vue = createApp(App);

vue.use(router).use(i18n).use(VueCookieNext);
vue.mount('#app');