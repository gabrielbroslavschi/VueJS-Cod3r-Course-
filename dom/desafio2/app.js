new Vue({
  el: "#desafio",
  data: {
    valor: "",
  },
  methods: {
    exibirAlerta() {
      alert("botão clickado");
    },
    armazenarValor(e) {
      this.valor = e.target.value;
    },
  },
});
