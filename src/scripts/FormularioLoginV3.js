export default {
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