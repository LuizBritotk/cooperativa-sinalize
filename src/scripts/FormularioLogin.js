import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default {
  data() {
    return {
      erroEmail: '',
      erroSenha: '',
      senhaVisivel: false,
      email: '',
      senha: '',
      servicos: [
        'Serviços de Sinalização',
        'Aluguel de Equipamentos',
        'Consultoria em Segurança Viária',
        'Manutenção de Estradas',
        'Planejamento de Tráfego',
        'Instalação de Semáforos',
        'Serviços de Pavimentação',
        'Aluguel de Máquinas Pesadas',
        'Consultoria em Engenharia Civil',
        'Serviços de Topografia',
        'Manutenção de Pontes',
        'Construção de Ciclovias',
        'Instalação de Placas de Trânsito',
        'Serviços de Iluminação Pública',
        'Aluguel de Andaimes',
        'Consultoria Ambiental',
        'Serviços de Drenagem',
        'Manutenção de Túneis',
        'Construção de Calçadas',
        'Instalação de Guard Rails',
        'Serviços de Paisagismo',
        'Aluguel de Contêineres',
        'Consultoria em Sustentabilidade',
        'Serviços de Demolição',
        'Manutenção de Sinalização Horizontal',
        'Construção de Estacionamentos',
        'Instalação de Barreiras de Proteção',
        'Serviços de Recapeamento Asfáltico',
        'Aluguel de Ferramentas Elétricas',
        'Consultoria em Mobilidade Urbana'
      ],
      servicosExibidos: [],
      indiceAtual: 0
    };
  },
  mounted() {
    this.atualizarServicosExibidos();
    setInterval(this.atualizarServicosExibidos, 5000); // Atualiza a cada 5 segundos
  },
  methods: {
    login() {
      signInWithEmailAndPassword(auth, this.email, this.senha)
        .then((userCredential) => {
          // Login bem-sucedido
          const user = userCredential.user;
          console.log('Usuário logado:', user);
          if (this.isIphone()) {
            console.log('Login feito a partir de um iPhone');
          }
        })
        .catch((error) => {
          // Tratar erros de login
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Erro de login:', errorCode, errorMessage);
          if (errorCode === 'auth/wrong-password') {
            this.erroSenha = 'Senha incorreta.';
          } else if (errorCode === 'auth/user-not-found') {
            this.erroEmail = 'Usuário não encontrado.';
          } else {
            this.erroEmail = errorMessage;
          }
        });
    },
    alternarVisibilidadeSenha() {
      this.senhaVisivel = !this.senhaVisivel;
      const campoSenha = document.getElementById('senha');
      campoSenha.type = this.senhaVisivel ? 'text' : 'password';
    },
    atualizarServicosExibidos() {
      const proximoIndice = this.indiceAtual + 4;
      this.servicosExibidos = this.servicos.slice(this.indiceAtual, proximoIndice);
      this.indiceAtual = proximoIndice >= this.servicos.length ? 0 : proximoIndice;
    },
    loginComGoogle() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // Login bem-sucedido
          const user = result.user;
          console.log('Usuário logado com Google:', user);
          if (this.isIphone()) {
            console.log('Login com Google feito a partir de um iPhone');
          }
        })
        .catch((error) => {
          // Tratar erros de login com Google
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Erro de login com Google:', errorCode, errorMessage);
        });
    },
    redirecionarParaCriarConta() {
      console.log('Redirecionando para a página de cadastro');
      this.$router.push({ name: 'FormularioCadastroLogin' });
    },
    redirecionarParaRedefinirSenha() {
      // Lógica para redirecionar para a página de redefinição de senha
    }
  }
};