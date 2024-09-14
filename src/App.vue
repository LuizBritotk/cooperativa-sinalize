<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import LayoutPadrao from '@/layouts/LayoutPadrao.vue';

export default {
  computed: {
    layout() {
      const layout = this.$route.meta.layout || LayoutPadrao;
      return layout;
    }
  }
}
</script>

<style>
/* Estilos globais */
</style>