import Vue from "vue";
import Router from "vue-router";
import Inicio from "./components/Inicio.vue";
import Menu from "./components/template/Menu.vue";
// import Usuario from "./components/usuario/Usuario.vue";
// import UsuarioLista from "./components/usuario/UsuarioLista.vue";
// import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe.vue";
// import UsuarioEditar from "./components/usuario/UsuarioEditar.vue";

Vue.use(Router);

const Usuario = () => import(/* webpackChunkName: 'usuario'*/'./components/usuario/Usuario.vue');
const UsuarioEditar = () => import(/* webpackChunkName: 'usuarioEditar'*/ './components/usuario/UsuarioEditar.vue');
const UsuarioLista = () => import(/* webpackChunkName: 'usuarioLista'*/ './components/usuario/UsuarioLista.vue');
const UsuarioDetalhe = () => import(/* webpackChunkName: 'usuarioDetalhe'*/ './components/usuario/UsuarioDetalhe.vue');


const router = new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      name: "inicio",
      path: "/",
      // component: Inicio ,
      components: {
        default: Inicio,
        menu: Menu,
      },
    },
    {
      path: "/usuario",
      component: Usuario,
      props: true,
      children: [
        { path: "", component: UsuarioLista, props: true, beforeEnter: (to, from, next) => {
          // eslint-disable-next-line no-console
          console.log("antes da rota -> usuario detalhe");
          next()
        } },
        { path: ":id", component: UsuarioDetalhe, props: true },
        {
          path: ":id/editar",
          component: UsuarioEditar,
          props: true,
          name: "editarUsuario",
        },
      ],
    },
    {
      path: "/redirecionar",
      redirect: "/usuario",
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) =>{

  next();


  // if(to.path !== '/usuario'){
  //   next("/usuario");
  // }else{
  //   next();
  // }
  
})

export default router;
