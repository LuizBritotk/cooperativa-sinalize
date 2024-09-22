
import axios from 'axios';
import { auth } from "@/firebaseConfig";
import {
  // createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  // FacebookAuthProvider,
  getIdToken
} from "firebase/auth";

// const API_URL = process.env.VUE_APP_API_URL_LOCALHOST;
const USUARIOS_URL = `https://localhost:7113/v1/usuario/`;

// Função para obter o token de autenticação do Firebase
const obterTokenDeAutenticacao = async () => {
  console.log("Obtendo token de autenticação...");
  const usuarioAtual = auth.currentUser;
  if (usuarioAtual) {
    const token = await getIdToken(usuarioAtual);
    console.log("Token de autenticação obtido:", token);
    return token;
  }
  throw new Error("Usuário não autenticado");
};

const loginComGoogle = async () => {
  const provedor = new GoogleAuthProvider();
  try {
    console.log("Fazendo login com Google...");
    const credenciaisUsuario = await signInWithPopup(auth, provedor);
    const usuarioFirebase = credenciaisUsuario.user;
    console.log("Usuário logado com Google:", usuarioFirebase);

    // eslint-disable-next-line no-debugger
    debugger;
    console.log("Solicitando token de autenticação e validação do backend...");
    const validacaoResposta = await axios.post(`${USUARIOS_URL}validar-login`, {
      uid: usuarioFirebase.uid,
      email: usuarioFirebase.email
    });

    console.log("Resposta do backend:", validacaoResposta.data);
    return validacaoResposta.data;
  } catch (erro) {
    console.error("Erro ao fazer login com Google:", erro);
    throw new Error(erro.response?.data?.mensagem || erro.message || 'Erro ao fazer login com Google');
  }
};

const loginUsuario = async (email, senha) => {
  try {
    console.log("Fazendo login no Firebase...");
    const credenciaisUsuario = await signInWithEmailAndPassword(auth, email, senha);
    const usuarioFirebase = credenciaisUsuario.user;
    console.log("Usuário logado no Firebase:", usuarioFirebase);

    console.log("Obtendo token de autenticação...");
    const token = await obterTokenDeAutenticacao();

    console.log("Obtendo informações adicionais do backend...");
    const resposta = await axios.get(`${USUARIOS_URL}/${usuarioFirebase.uid}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log("Resposta do backend:", resposta.data);
    return resposta.data;
  } catch (erro) {
    console.error("Erro ao fazer login:", erro);
    throw new Error(erro.response?.data?.mensagem || erro.message || 'Erro ao fazer login');
  }
};

const registrarUsuario = async (usuario) => {
  try {
    
    // eslint-disable-next-line no-debugger
    debugger;
    // Envia a solicitação para o backend
    const resposta = await axios.post(`${USUARIOS_URL}/registrar-usuario-padrao`, {
      CPF: usuario.cpf,
      Nome: usuario.nome,
      Email: usuario.email,
      Celular: usuario.celular,
      Senha: usuario.senha
    });

    console.log("Resposta da API:", resposta.data);
    return resposta.data;
  } catch (error) {
    console.error("Erro ao registrar usuário:", error.response ? error.response.data : error.message);
    throw error;
  }
};

// const loginComFacebook = async () => {
//   const provedor = new FacebookAuthProvider();
//   try {
//     console.log("Fazendo login com Facebook...");
//     const credenciaisUsuario = await signInWithPopup(auth, provedor);
//     const usuarioFirebase = credenciaisUsuario.user;
//     console.log("Usuário logado com Facebook:", usuarioFirebase);

//     console.log("Obtendo token de autenticação...");
//     const token = await obterTokenDeAutenticacao();

//     console.log("Obtendo informações adicionais do backend...");
//     const resposta = await axios.get(`${USUARIOS_URL}/${usuarioFirebase.uid}`, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });

//     console.log("Resposta do backend:", resposta.data);
//     return resposta.data;
//   } catch (erro) {
//     console.error("Erro ao fazer login com Facebook:", erro);
//     throw new Error(erro.response?.data?.mensagem || erro.message || 'Erro ao fazer login com Facebook');
//   }
// };

export default {
  registrarUsuario,
  loginUsuario,
  loginComGoogle,
  // loginComFacebook,
};