<!-- <template>
  <div>
    <FundoTelaLogin /> -->
    <!-- <h1 class="titulo-pagina">Login</h1> -->
     <!--<FormularioLogin />
  </div> 
</template>

<script>
import FundoTelaLogin from '@/components/FundoTelaLogin.vue';
import FormularioLogin from '@/components/FormularioLogin.vue';

export default {
  name: 'PaginaLogin',
  components: {
    FundoTelaLogin,
    FormularioLogin
  }
};
</script> -->

<template>
  <div>
    <FundoTelaLogin />
    <FormularioLoginV2 />
  </div>
</template>

<script>
import FundoTelaLogin from '@/components/FundoTelaLogin.vue';
import FormularioLoginV2 from '@/components/FormularioLoginV2.vue';

export default {
  name: 'PaginaLogin',
  components: {
    FundoTelaLogin,
    FormularioLoginV2
  }
};
</script>