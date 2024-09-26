<template>
  <header class="header-header">
    <div class="header-container">
      <nav class="nav-header">
        <ul class="nav-list-header">
          <li class="nav-item-header"><a href="#">Serviços</a></li>
          <li class="nav-item-header"><a href="#">Alugueis</a></li>
          <li class="nav-item-header"><a href="#">Sobre nós</a></li>
          <li class="nav-item-header"><a href="#">Fotos</a></li>
        </ul>
      </nav>
      <a href="" id="logo-header"><img class="logo-header" src="@/assets/logo-sinalize.svg" alt="Logo"></a>
      <div class="nav-dois-header">
        <input class="pesquisa-header" type="text" placeholder="Pesquisar Sinalize" v-model="pesquisa">
        <a href="" class="entrar-header" @click.prevent="irParaLogin">Entrar</a>
  
        <a href="" class="inscrever-se-header">Inscrever-se</a>
      </div>
      <div class="hamburguer-header" @click="toggleMenu">
        <div class="hamburguer-line"></div>
        <div class="hamburguer-line"></div>
        <div class="hamburguer-line"></div>
      </div>
    </div>
    <div class="mobile-menu" v-if="isMenuOpen">
      <ul class="nav-list-header">
        <li class="nav-item-header"><a href="#">Serviços</a></li>
        <li class="nav-item-header"><a href="#">Alugueis</a></li>
        <li class="nav-item-header"><a href="#">Sobre nós</a></li>
        <li class="nav-item-header"><a href="#">Fotos</a></li>
      </ul>
    </div>
  </header>
</template>

<script src="../scripts/ApresentacaoHeader.js"></script>

<style scoped>
@import '@/styles/ApresentacaoHeader.css';
</style>