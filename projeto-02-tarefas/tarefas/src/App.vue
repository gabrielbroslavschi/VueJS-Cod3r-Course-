<template>
	<div id="app">
		<h1>Tarefas</h1>
		<newTaks @taskAdded="addTask"></newTaks>
		<taskGridVue @taskDeleted="deleteTask" @taskStateChange="toggleTaskState":tasks='tasks'/>
	</div>
</template>

<script>


import taskGridVue from "./components/taskGrid.vue"
import newTaks from "./components/newTask.vue"


export default {
	components: {taskGridVue, newTaks},
	data(){
		return{
			tasks:[
				{name: 'lavar a louça', pending: false},
				{name: "compras", pending: true},
				
			]
		}
	},
	methods:{
		addTask(task){
			const sameName = t => t.name === task.name
			const reallyNew = this.tasks.filter(sameName).length == 0

			if(reallyNew){
				this.tasks.push({
					name: task.name,
					pending: true
				})
			}
		},

		deleteTask(i){
			this.tasks.splice(i, 1);
		},

		toggleTaskState(i){
			this.tasks[i].pending = !this.tasks[i].pending
		}
	}

}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
