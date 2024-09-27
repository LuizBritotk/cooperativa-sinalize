<template>
  <div class="corpo">
    <!-- Header -->
    <header class="header">
      <div class="container">
        <h1>Bem-vindo à Cooperativa Sinalize</h1>
        <p>Excelência em sinalização viária e segurança no trânsito</p>
        <a href="#servicos" class="btn-primary">Nossos Serviços</a>
      </div>
    </header>

    <!-- Seção de Serviços -->
    <section id="servicos" class="secao servicos">
      <div class="container">
        <h2>Serviços</h2>
        <div class="servicos-grid">
          <div class="servico-item">
            <h3>Sinalização Horizontal</h3>
          </div>
          <div class="servico-item">
            <h3>Sinalização Vertical</h3>
          </div>
          <div class="servico-item">
            <h3>Sinalização Semafórica</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção Sobre Nós -->
    <section id="sobre-nos" class="secao sobre-nos">
      <div class="container">
        <h2>Sobre a Cooperativa Sinalize</h2>
      </div>
    </section>

    <!-- Seção de Fotos -->
    <section id="fotos" class="secao fotos">
      <div class="container">
        <h2>Galeria de Fotos</h2>
        <div class="galeria-fotos">
          <img src="exemplo-foto1.jpg" alt="Foto de um projeto de sinalização em rodovia">
          <img src="exemplo-foto2.jpg" alt="Instalação de sinalização vertical em área urbana">
          <img src="exemplo-foto3.jpg" alt="Veículo da cooperativa realizando pintura de faixas">
        </div>
      </div>
    </section>
  </div>
</template>


<script src="../scripts/ApresentacaoCorpo.js"></script>

<style scoped>
@import '@/styles/Global.css';
@import '@/styles/ApresentacaoCorpo.css';
</style>