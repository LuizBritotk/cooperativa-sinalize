import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default {
  name: "FormularioCadastroLogin",
  data() {
    return {
      usuario: {
        nome: "",
        email: "",
        senha: "",
        celular: "",
        cpf: ""
      }
    };
  },
  methods: {
    async cadastrarUsuario() {
      try {
        const docRef = await addDoc(collection(db, "usuarios"), {
          nome: this.usuario.nome,
          email: this.usuario.email,
          senha: this.usuario.senha,
          celular: this.usuario.celular,
          cpf: this.usuario.cpf,
          emailVerificado: false,
          ativo: true,
          admin: false,
          criacao: new Date(),
          celularVerificado: false,
          grupos: [],
          tags: []
        });
        console.log("Usuário cadastrado com ID: ", docRef.id);
      } catch (e) {
        console.error("Erro ao adicionar documento: ", e);
      }
    }
  }
};