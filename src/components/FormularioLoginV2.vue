<template>
  <div class="main">
    <div class="container a-container" id="a-container">
      <form class="form" id="a-form" @submit.prevent="login">
        <div class="form__icons">
          <img class="form__icon" alt="Google Logo" src="@/assets/google-logo-preto.svg" @click="loginComGoogle" />
          <img class="form__icon" alt="Facebook Logo" src="@/assets/facebook-logo-preto.svg" @click="loginComFacebook" />
        </div>
        <span class="form__span">ou use sua conta de e-mail</span>
        <input class="form__input" type="text" v-model="email" placeholder="Email" />
        <div class="form__input-wrapper">
          <input :type="mostrarSenha ? 'text' : 'password'" class="form__input" v-model="senha" placeholder="Senha" />
          <button type="button" class="mostrar-senha-btn" @click="toggleMostrarSenha">
            {{ mostrarSenha ? 'Ocultar' : 'Mostrar' }}
          </button>
        </div>
        <a href="#" class="form__link">Esqueceu sua senha?</a>
        <button class="button submit">ENTRAR</button>
      </form>
    </div>
    <div class="container b-container is-hidden" id="b-container">
      <form class="form" id="b-form" @submit.prevent="registrar">
        <span class="form__span">Use seu e-mail para registro</span>
        <input class="form__input" type="text" v-model="nome" placeholder="Nome" />
        <input class="form__input" type="text" v-model="email" placeholder="Email" />
        <div class="form__input-wrapper">
          <input :type="mostrarSenha ? 'text' : 'password'" class="form__input" v-model="senha" placeholder="Senha" />
          <button type="button" class="mostrar-senha-btn" @click="toggleMostrarSenha">
            {{ mostrarSenha ? 'Ocultar' : 'Mostrar' }}
          </button>
        </div>
        <input class="form__input" type="text" v-model="cpf" placeholder="CPF" v-mask="'###.###.###-##'" />
        <input class="form__input" type="text" v-model="celular" placeholder="Celular" v-mask="'(##) #####-####'" />
        <button class="button submit">CADASTRAR</button>
      </form>
    </div>
    <div class="switch is-txr" id="switch-cnt">
      <div class="switch__circle is-txr"></div>
      <div class="switch__circle switch__circle--t is-txr"></div>
      <div class="switch__container is-hidden" id="switch-c1">
        <h2 class="switch__title">Bem-vindo de volta!</h2>
        <p class="switch__description">
          Para manter-se conectado conosco, por favor, faça login com suas informações pessoais.
        </p>
        <button class="button switch-btn" id="switch-signin">ENTRAR</button>
      </div>
      <div class="switch__container" id="switch-c2">
        <h2 class="switch__title">Olá, amigo!</h2>
        <p class="switch__description">
          Insira seus dados pessoais e comece sua jornada conosco.
        </p>
        <button class="button switch-btn" id="switch-signup">CADASTRAR</button>
      </div>
    </div>
  </div>
</template>
<script src="../scripts/FormularioLoginV2.js"></script>

<style scoped>
@import '@/styles/Index.css';
@import '@/styles/FormularioLoginV2.css';
</style>