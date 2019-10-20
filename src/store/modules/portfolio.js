export default {
    state: {
        funds: 10000,
        stocks: []
    },
    mutations: {
        buyStock(state, { stockId, quantity, stockPrice }) {
            const record = state.stocks.find(el => el.id === stockId);
            if (record) {
                record.quantity += quantity;
            } else {
                state.stocks.push({
                    id: stockId,
                    quantity
                });
            }
            
            state.funds -= stockPrice * quantity;
        },
        sellStock(state, { stockId, quantity, stockPrice }) {
            const record = state.stocks.find(el => el.id === stockId);
            if (record.quantity > quantity) {
                record.quantity -= quantity;
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1);
            }
            
            state.funds += stockPrice * quantity;
        }
    },
    actions: {
        sellStock({ commit }, order) {
            commit('sellStock', order);
        }
    },
    getters: {
        stockPortfolio(state, getters) {
            return state.stocks.map(stock => {
                const record = getters.stocks.find(el => el.id === stock.id);
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                };
            });
        },
        funds(state) {
            return state.funds;
        }
    }
};