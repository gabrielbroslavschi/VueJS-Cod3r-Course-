<!-- eslint-disable vue/valid-template-root -->
<template>
    <div class='task-grid'>
        <template>
            <task v-for='task in tasks' :key="task.name" :task="task"> </task>
        </template>
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

</style>