
export default {
    name: 'ApresentacaoCorpo',
    data() {
      return {
        email: ''
      };
    },
    methods: {
      inscrever() {
        // Lógica para inscrição
        alert(`Inscrito com o e-mail: ${this.email}`);
      }
    }
  };