import { ref } from "vue";
import { auth } from "@/firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export default {
  name: 'FormularioLoginV2',
  setup() {
    const email = ref("");
    const senha = ref("");
    const nome = ref("");

    const login = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, senha.value);
        alert("Login bem-sucedido!");
      } catch (error) {
        alert("Erro ao fazer login: " + error.message);
      }
    };

    const registrar = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email.value, senha.value);
        alert("Cadastro bem-sucedido!");
      } catch (error) {
        alert("Erro ao se cadastrar: " + error.message);
      }
    };

    const loginComGoogle = async () => {
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
        alert("Login com Google bem-sucedido!");
      } catch (error) {
        alert("Erro ao fazer login com Google: " + error.message);
      }
    };

    const loginComFacebook = async () => {
      const provider = new FacebookAuthProvider();
      try {
        await signInWithPopup(auth, provider);
        alert("Login com Facebook bem-sucedido!");
      } catch (error) {
        alert("Erro ao fazer login com Facebook: " + error.message);
      }
    };

    const registrarComGoogle = async () => {
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
        alert("Cadastro com Google bem-sucedido!");
      } catch (error) {
        alert("Erro ao se cadastrar com Google: " + error.message);
      }
    };

    const registrarComFacebook = async () => {
      const provider = new FacebookAuthProvider();
      try {
        await signInWithPopup(auth, provider);
        alert("Cadastro com Facebook bem-sucedido!");
      } catch (error) {
        alert("Erro ao se cadastrar com Facebook: " + error.message);
      }
    };

    return {
      email,
      senha,
      nome,
      login,
      registrar,
      loginComGoogle,
      loginComFacebook,
      registrarComGoogle,
      registrarComFacebook,
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