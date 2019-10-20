import Vue from 'vue';
import axios from 'axios';

import { baseURL } from '../../env.js';

console.log(baseURL);

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: baseURL
        });
    }
});