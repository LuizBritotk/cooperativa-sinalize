<template>
  <div>
    <FundoTelaLogin />
    <FormularioLoginV2 />
    <!-- <FundoTelaLogin /> --> 

</div>
</template>

<script>
import FundoTelaLogin from '@/components/FundoTelaLogin.vue';
import FormularioLoginV2 from '@/components/FormularioLoginV2.vue';

// import FormularioLogin from '@/components/FormularioLogin.vue';

export default {
  name: 'PaginaLogin',
  components: {
    FundoTelaLogin,
    FormularioLoginV2
    // FormularioLogin
  }
};
</script>