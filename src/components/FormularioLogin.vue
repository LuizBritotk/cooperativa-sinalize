<template>
  <div class="login-wrapper">
    <div class="login-side">
      <a href="#" title="Logo">
        <img class="logo" src="@/assets/logo.png" alt="Logo">
      </a>
      <div class="my-form__wrapper">
        <div class="login-welcome-row">
          <h1>Bem-vindo de volta à Sinalize &#x1F44B;</h1>
          <p>Por favor, insira seus dados para continuar.</p>
        </div>
        <form class="my-form" @submit.prevent="login">
          <div class="socials-row">
            <a href="#" title="Usar Google">
              <img src="@/assets/google.png" alt="Google">
              Entrar com Google
            </a>
            <a href="#" title="Usar Apple">
              <img src="@/assets/apple.png" alt="Apple">
              Entrar com Apple
            </a>
          </div>
          <div class="divider">
            <div class="divider-line"></div>
            Ou
            <div class="divider-line"></div>
          </div>
          <div class="text-field">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Seu Email" required>
            <img src="@/assets/email.svg" alt="Ícone de Email" title="Ícone de Email">
          </div>
          <div class="text-field">
            <label for="password">Senha:</label>
            <input id="password" type="password" name="password" placeholder="Sua Senha" title="Mínimo de 6 caracteres, pelo menos 1 letra, 1 número e 1 símbolo" pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$" required>
            <img src="@/assets/password.svg" alt="Ícone de Senha" title="Ícone de Senha">
          </div>
          <input type="submit" class="my-form__button" value="Entrar">
          <div class="my-form__actions">
            <div class="my-form__row">
              <span>Esqueceu sua senha?</span>
              <a href="#" title="Redefinir Senha">Redefinir Senha</a>
            </div>
            <div class="my-form__signup">
              <a href="#" title="Criar Conta">Criar Conta</a>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="info-side">
      <img src="@/assets/mock.png" alt="Mock" class="mockup">
      <div class="welcome-message">
        <h2>Bem-vindo à Sinalize! 👋</h2>
        <p>Junte-se a nós para melhorar a sinalização e a segurança nas estradas.</p>
      </div>
    </div>
  </div>
</template>

<script src="@/scripts/FormularioLogin.js"></script>

<style scoped>
@import '@/styles/FormularioLogin.css';
</style>