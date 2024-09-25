export default {
    name: 'ApresentacaoHeader',
    data() {
      return {
        isMenuOpen: false,
        pesquisa: ''
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    }
  };
