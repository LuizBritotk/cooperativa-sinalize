<template>
    <div>
      <header>
        <!-- Cabeçalho fixo -->
        <nav>
          <!-- Navegação -->
        </nav>
      </header>
      <main>
        <router-view></router-view>
      </main>
      <footer>
        <!-- Rodapé fixo -->
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LayoutPadrao'
  }
  </script>
  
  <style scoped>
  /* Estilos para o layout fixo */
  </style>