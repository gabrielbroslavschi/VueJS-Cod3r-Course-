import Vue from "vue"

export default new Vue({
    methods:
    {
        usuarioSelecionado(valor){
            this.$emit("detalhamento", valor);
        },
        detalhesDoUsuario(valor){
            this.$on("detalhamento", valor);
        }
    }
});