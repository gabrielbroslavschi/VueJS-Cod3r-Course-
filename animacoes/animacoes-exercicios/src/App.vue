<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr />
    <b-button variant="primary" class="mb-4" @click="exibir = !exibir"
      >Salvar Mensagem</b-button
    >

    <transition name="fade">
      <b-alert variant="info" show v-if="exibir"> {{ msg }} </b-alert>
    </transition>

    <transition name="slide" type="animation" appear>
      <b-alert variant="info" show v-if="exibir"> {{ msg }} </b-alert>
    </transition>

    <transition
      enter-active-class="animated bounce"
      leave-active-class="animated shake"
    >
      <b-alert variant="info" show v-if="exibir"> {{ msg }} </b-alert>
    </transition>

    <hr />
    <b-select v-model="tipoAnimacao" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>

    <transition :name="tipoAnimacao" mode="out-in">
      <b-alert variant="info" show v-if="exibir" key="info">
        {{ msg }}
      </b-alert>
      <b-alert variant="warning" show v-else key="warning"> {{ msg }} </b-alert>
    </transition>

    <hr />

    <button @click="exibir2 = !exibir2">Alternar</button>
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterleave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-if="exibir2" class="caixa"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Uma mensagem de informação para o usuario",
      exibir: false,
      exibir2: true,
      tipoAnimacao: "fade",
      larguraBase: 0,
    };
  },
  methods: {
    animar(el, done, negativo) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura =
          this.larguraBase + (negativo ? -rodada * 10 : rodada * 10);
        el.style.width = `${novaLargura}px`;
        rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    /* eslint-disable */
    beforeEnter(el) {
      this.larguraBase = 0;
      el.style.width = `${larguraBase}px`;
    },
    enter(el, done) {
      this.animar(el, done, false);
    },
    // afterEnter(el) {},
    // enterCancelled(el) {},
    beforeLeave(el) {
      this.larguraBase = 300;
      el.style.width = `${larguraBase}px`;
    },
    leave(el, done) {
      this.animar(el, done, true);
    },
    // afterLeave(el) {},
    // leaveCancelled() {},
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 2s;
}

.fade-to {
  opacity: 1;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-to {
  transition: opacity 2s;
}

.fade-leave-to {
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: opacity 2s;
}

.slide-leave-active {
  animation: slide-out 2s ease;
  transition: opacity 2s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>
