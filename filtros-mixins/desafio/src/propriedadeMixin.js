export default{
  computed: {
	fraseComVirgulas(){
		return this.string.replace(/\s/g, ',')
	},
	fraseComTamanhos(){
		return this.stringInicial.split(' ').map( p => `${p} (${p.length})`).join(' ')
	}
  }
}