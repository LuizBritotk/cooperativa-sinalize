import { mapActions } from 'vuex';

export default {
  name: 'ApresentacaoHeader',
  data() {
    return {
      isMenuOpen: false,
      pesquisa: ''
    };
  },
  methods: {
    ...mapActions(['login']),
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    irParaLogin() {
      this.$router.push({ name: 'PaginaLogin' });
    }
  }
};