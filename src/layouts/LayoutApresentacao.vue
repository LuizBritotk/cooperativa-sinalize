<template>
  <div>
    <header>
      <ApresentacaoHeader />
    </header>
    <main>
      <!-- <ApresentacaoSidebar />
      <ApresentacaoCorpo /> -->
      <router-view></router-view>
    </main>
    <footer>
      <ApresentacaoFooter />
    </footer>
  </div>
</template>

<script>
import ApresentacaoHeader from '@/components/ApresentacaoHeader.vue';
// import ApresentacaoSidebar from '@/components/ApresentacaoSidebar.vue';
// import ApresentacaoCorpo from '@/components/ApresentacaoCorpo.vue';
import ApresentacaoFooter from '@/components/ApresentacaoFooter.vue';

export default {
  name: 'LayoutPadrao',
  components: {
    ApresentacaoHeader,
    // ApresentacaoSidebar,
    // ApresentacaoCorpo,
    ApresentacaoFooter
  }
}
</script>

<!-- <style scoped>
@import '@/styles/ApresentacaoHeader.css';
@import '@/styles/ApresentacaoSidebar.css';
@import '@/styles/ApresentacaoCorpo.css';
@import '@/styles/ApresentacaoFooter.css';

/* Estilos para o layout fixo */
</style> -->