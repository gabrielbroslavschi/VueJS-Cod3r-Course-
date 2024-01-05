<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<!-- <Menu/> -->

		<router-view name="menu"/>
		<router-view/>
	</div>
</template>

<script>

export default {
	// eslint-disable-next-line vue/no-unused-components
	// components:{ Menu }
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
