<template>
  <header class="header-header">
    <nav class="nav-header">
      <a href="" id="logo-header"><img class="logo-header" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt="Logo"></a>
      <ul class="nav-list-header">
        <li class="nav-item-header"><a href="#">Serviços</a></li>
        <li class="nav-item-header"><a href="#">Alugueis</a></li>
        <li class="nav-item-header"><a href="#">Sobre-nos</a></li>
        <li class="nav-item-header"><a href="#">Fotos</a></li>
      </ul>
    </nav>
    <div class="nav-dois-header">
      <input class="pesquisa-header" type="text" placeholder=" Pesquisar Sinalize" v-model="pesquisa">
      <a href="" class="entrar-header">Entrar</a>
      <a href="" class="inscrever-se-header">Inscrever-se</a>
    </div>
    <div class="hamburguer-header" @click="toggleMenu">
      <div class="hamburguer-line-header"></div>
      <div class="hamburguer-line-header"></div>
      <div class="hamburguer-line-header"></div>
    </div>
  </header>
</template>

<script src="../scripts/ApresentacaoHeader.js"></script>

<style scoped>
@import '@/styles/ApresentacaoHeader.css';
</style>