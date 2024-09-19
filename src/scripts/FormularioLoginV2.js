import { ref } from "vue";
import UsuarioServico from "@/services/UsuarioServico";

export default {
  name: 'FormularioLoginV2',
  setup() {
    const email = ref("");
    const senha = ref("");
    const nome = ref("");
    const cpf = ref("");
    const celular = ref("");
    const foto = ref("");
    const marcaId = ref("");
    const admin = ref(false);
    const ativo = ref(false);

    const login = async () => {
      try {
        const response = await UsuarioServico.loginUsuario(email.value, senha.value);
        alert("Login bem-sucedido!");
        console.log(response);
      } catch (error) {
        alert("Erro ao fazer login: " + error.message);
      }
    };

    const registrar = async () => {
      const usuario = {
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        cpf: cpf.value,
        celular: celular.value,
        foto: foto.value,
        marcaId: marcaId.value,
        admin: admin.value,
        ativo: ativo.value,
        grupos: ["usuario", "vendedor", "gerente"],
      };
      try {
        const response = await UsuarioServico.registrarUsuario(usuario);
        alert("Cadastro bem-sucedido!");
        console.log(response);
      } catch (error) {
        alert("Erro ao se cadastrar: " + error.message);
      }
    };

    const loginComGoogle = async () => {
      try {
        const response = await UsuarioServico.loginComGoogle();
        alert("Login com Google bem-sucedido!");
        console.log(response);
      } catch (error) {
        alert("Erro ao fazer login com Google: " + error.message);
      }
    };

    const loginComFacebook = async () => {
      try {
        const response = await UsuarioServico.loginComFacebook();
        alert("Login com Facebook bem-sucedido!");
        console.log(response);
      } catch (error) {
        alert("Erro ao fazer login com Facebook: " + error.message);
      }
    };

    return {
      email,
      senha,
      nome,
      cpf,
      celular,
      foto,
      marcaId,
      admin,
      ativo,
      login,
      registrar,
      loginComGoogle,
      loginComFacebook,
    };
  },
  mounted() {
    const switchCtn = document.querySelector("#switch-cnt");
    const switchC1 = document.querySelector("#switch-c1");
    const switchC2 = document.querySelector("#switch-c2");
    const switchCircle = document.querySelectorAll(".switch__circle");
    const switchBtn = document.querySelectorAll(".switch-btn");
    const containerA = document.querySelector(".a-container");
    const containerB = document.querySelector(".b-container");

    const mudarFormulario = (isLogin) => {
      switchCtn.classList.add("is-gx");
      setTimeout(() => {
        switchCtn.classList.remove("is-gx");
      }, 1500);

      switchCtn.classList.toggle("is-txr");
      switchCircle[0].classList.toggle("is-txr");
      switchCircle[1].classList.toggle("is-txr");

      switchC1.classList.toggle("is-hidden");
      switchC2.classList.toggle("is-hidden");

      if (isLogin) {
        containerA.classList.remove("is-hidden");
        containerB.classList.add("is-hidden");
      } else {
        containerA.classList.add("is-hidden");
        containerB.classList.remove("is-hidden");
      }

      containerA.classList.toggle("is-txl");
      containerB.classList.toggle("is-txl");
      containerB.classList.toggle("is-z200");
    };

    switchBtn.forEach(btn => {
      btn.addEventListener("click", () => {
        const isLogin = btn.id === "switch-signin";
        mudarFormulario(isLogin);
      });
    });
  }
};