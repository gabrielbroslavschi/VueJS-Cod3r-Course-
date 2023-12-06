new Vue({
  el: "#desafio",
  data: {
    efeito: true,
    classe: "",
	perigo: true,
	classe3: '',
	classe4: '',
	cor5:'',
	estilo5: {
		width: '100px',
		height: '100px'
	} ,
	width:'0'
  },
  computed: {
   
    
  },
  methods: {
    iniciarEfeito() {
      this.efeito = !this.efeito;
      return this.efeito
        ? (this.classe = "destaque")
        : (this.classe = "encolher");
    },
    iniciarProgresso() {
		let valor = 0;
		const temporizador = setInterval(() =>{
			valor += 1;
			this.width = `${valor}%`;
			if(valor == 100) clearInterval(temporizador);
		},100)
	},
    setPerigo(e){
		if(e.target.value === 'true'){
			this.perigo = true;
		}else if(e.target.value === 'false'){
			this.perigo = false
		}
	}
    
  },
});
