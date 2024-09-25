<template>
    <div class="layout-login">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LayoutLogin',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      handleSubmit() {
        // Lógica para submissão do formulário
        alert(`Username: ${this.username}\nPassword: ${this.password}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .layout-login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Ensure the container takes the full height of the viewport */
    /* background: rgb(0, 136, 0); Start with dark green */
    /* background: linear-gradient(90deg, rgba(0, 136, 0, 1) 0%, rgba(1, 5, 1, 1) 28%, rgba(0, 0, 0, 1) 100%); */
    /* color: white; */
    line-height: 1.6;
  }
  </style>