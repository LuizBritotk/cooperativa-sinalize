<template>
  <div class="formulario-cadastro">
    <h1>Cadastro de Usuário</h1>
    <form @submit.prevent="cadastrarUsuario">
      <div class="campo">
        <label for="nome">Nome</label>
        <input type="text" id="nome" v-model="usuario.nome" required />
      </div>
      <div class="campo">
        <label for="email">E-mail</label>
        <input type="email" id="email" v-model="usuario.email" required />
      </div>
      <div class="campo">
        <label for="senha">Senha</label>
        <input type="password" id="senha" v-model="usuario.senha" required />
      </div>
      <div class="campo">
        <label for="celular">Celular</label>
        <input type="text" id="celular" v-model="usuario.celular" required />
      </div>
      <div class="campo">
        <label for="cpf">CPF</label>
        <input type="text" id="cpf" v-model="usuario.cpf" required />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
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
      // Log para verificar se o método está sendo chamado
      console.log("Método cadastrarUsuario chamado");

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
</script>

<style scoped>
.formulario-cadastro {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.campo {
  margin-bottom: 15px;
}

.campo label {
  display: block;
  margin-bottom: 5px;
}

.campo input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>