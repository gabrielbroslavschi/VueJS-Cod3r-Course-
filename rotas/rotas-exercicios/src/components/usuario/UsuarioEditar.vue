<template>
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <p><strong>Codigo: </strong>{{ id }}</p>
        <p><strong>Completo: </strong> {{ $route.query.completo ? "sim" : "não" }}</p>
        <p><strong>Lingua: </strong> {{ $route.query.lingua }}</p>
        <hr>
        <button primario>Confirmar</button>
        <div id="rodape">
            <h3>Curso Vue</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    beforeRouteEnter(to, from, next){
        // eslint-disable-next-line no-console
        console.log("dentro do componente -> Usuário detalhe");
        next(intanciaComponent => {
            // eslint-disable-next-line no-console
            console.log(intanciaComponent.id)
        })
    }
}
</script>

<style>
    #rodape{
        margin-top: 1000px;
    }
</style>