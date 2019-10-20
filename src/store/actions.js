import Vue from 'vue';

export default {
    async loadData({ commit }) {
        const res = await Vue.prototype.$http('data.json');
        if (res.data) {
            commit('setStocks', res.data.stocks);
            commit('setPortfolio', { funds: res.data.funds, stockPortfolio: res.data.stockPortfolio });
        }
    }
};