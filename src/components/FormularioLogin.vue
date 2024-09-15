<template>
  <div class="cartao-login">
    <div class="logo">
      <img src="@/assets/cooper-logo.png" alt="Cooper Logo" class="logo" />
    </div>
    <div class="header">
      <h1 class="titulo-form">Sinalize</h1>
    </div>
    <hr class="linha-divisoria" />
    <form class="formulario-login" @submit.prevent="login">
      <ul class="formulario-lista">
        <li class="formulario-item">
          <div class="campo-texto" :class="{ 'campo-texto--erro': erroEmail }">
            <label for="email" class="campo-label">E-mail</label>
            <input type="email" id="email" name="email" placeholder="Seu Email" v-model="email" required />
            <span class="mensagem-erro" v-if="erroEmail">{{ erroEmail }}</span>
          </div>
        </li>
        <li class="formulario-item">
          <div class="campo-texto campo-senha" :class="{ 'campo-texto--erro': erroSenha }">
            <label for="senha" class="campo-label">Senha</label>
            <input id="senha" type="password" name="senha" placeholder="Sua Senha" v-model="senha" title="Mínimo de 6 caracteres, pelo menos 1 letra, 1 número e 1 símbolo" pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$" required />
            <button type="button" class="alternar-visibilidade-senha" @click="alternarVisibilidadeSenha">Mostrar</button>
            <span class="mensagem-erro" v-if="erroSenha">{{ erroSenha }}</span>
          </div>
        </li>
        <li class="formulario-item">
          <button type="submit" class="botao-formulario">Entrar</button>
        </li>
        <li class="formulario-item">
          <a href="#" class="esqueceu-senha" @click.prevent="redirecionarParaRedefinirSenha">Esqueceu sua senha?</a>
        </li>
      </ul>
      <div class="divisor">
        <div class="divisor-linha"></div>
        <span class="campo-label">Ou</span>
        <div class="divisor-linha"></div>
      </div>
      <ul class="redes-sociais-lista">
        <li class="redes-sociais-item">
          <button type="button" class="botao-rede-social" @click="loginComGoogle">
            <img src="@/assets/google.png" alt="Google" class="icone-pequeno" />
            Entrar com Google
          </button>
        </li>
      </ul>
      <div class="acoes-formulario">
        <a href="#" class="criar-conta" @click.prevent="redirecionarParaCriarConta">Criar Conta</a>
      </div>
    </form>
  </div>
</template>

<script src="../scripts/FormularioLogin.js"></script>

<style scoped>
@import '@/styles/Index.css';
@import '@/styles/FormularioLogin.css';
</style>