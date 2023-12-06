new Vue({
    el: "#desafio",
    data:{
        meuNome: 'Gabriel Broslavschi',
        idade: 22,
        papelDeParede: "https://i.pinimg.com/736x/ea/1f/51/ea1f51a325134bccfc65f69f98ab96eb.jpg"
    },
    methods:{
        idadeMultiplicada(){
            return (this.idade*3);
        },

        numeroRandomico(){
           return Math.random();
        },

        alterarMeuNome(event){
            this.meuNome = event.target.value
        }
    }
})