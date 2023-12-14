<!-- eslint-disable vue/valid-template-root -->
<template>
    <div class='task-grid'>
        <template v-if="tasks.length != 0">
            <task v-for='task in tasks' :key="task.name" :task="task"> </task>
        </template>
        <p class='no-task' v-else>Sua vida esta em dia :)</p>
    </div>
</template>

<script>

import task from "./task.vue"

export default {
    components:{
        task
    },
   props: {
    tasks: {
        type: Array, required: true
    }
   }
}
</script>

<style>

.task-grid{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.task-grid .task {
    margin: 10px;
}

.no-task{
    color: #AAA;
    font-size: 1.7rem;
}
</style>