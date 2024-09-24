<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script>
import LayoutApresentacao from '@/layouts/LayoutApresentacao.vue';

export default {
  computed: {
    layout() {
      return this.$route.meta.layout || LayoutApresentacao;
    }
  }
}
</script>

<style>
/* Estilos globais */
</style>