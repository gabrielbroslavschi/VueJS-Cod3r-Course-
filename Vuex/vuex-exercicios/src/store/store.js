import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    produtos: [],
    quantidade: 2,
    preco: 9.99,
  },
  getters: {
    valorTotal(state) {
      return state.produtos
        .map((p) => p.quantidade * p.preco)
        .reduce((total, atual) => total + atual, 0);
    },
  },
  mutations:{
    //payLoad === produto
    adicionarProduto(state, payLoad){
        state.produtos.push(payLoad);
    },
    setQuantidade(state, payload){
        state.quantidade = payload;
    },
    setPreco(state, payload){
        state.preco = payload;
    }

  },
  actions:{
    adicionarProduto({commit}, payload){
        setTimeout(() => {
            commit("adicionarProduto", payload)
        }, 1000)
    }
  }
});
