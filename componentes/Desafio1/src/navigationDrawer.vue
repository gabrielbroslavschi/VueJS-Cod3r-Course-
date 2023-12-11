<template>
    <v-navigation-drawer app>
      <app-toolbar></app-toolbar>

      <v-divider></v-divider>

      <app-list></app-list>      
    </v-navigation-drawer>
</template>


<script>


import list from "./list.vue";
import toolbar from "./toolbar.vue";

export default {
    components: {
        'app-list' : list,
        'app-toolbar': toolbar
    }
}
</script>