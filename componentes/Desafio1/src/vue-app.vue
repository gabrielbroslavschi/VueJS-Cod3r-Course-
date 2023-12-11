<template>
    <v-app>
    <app-navigation-drawer></app-navigation-drawer>

    <app-bar></app-bar>

    <app-courosel></app-courosel>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
import footerVue from "./footer.vue";
import navigationDrawer from "./navigationDrawer.vue";
import carouselVue from './carousel';

export default {
  components: {
        'app-courosel': carouselVue,
        'app-footer': footerVue,
        'app-navigation-drawer': navigationDrawer
    }
}
</script>