import axios from 'axios';
import { auth } from "@/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  getIdToken
} from "firebase/auth";

const API_URL = process.env.VUE_APP_API_URL;
const USUARIOS_URL = `${API_URL}/api/usuario/`;

// Função para obter o token de autenticação do Firebase
const obterTokenDeAutenticacao = async () => {
  console.log("Obtendo token de autenticação...");
  deb;
  const usuarioAtual = auth.currentUser;
  if (usuarioAtual) {
    const token = await getIdToken(usuarioAtual);
    console.log("Token de autenticação obtido:", token);
    return token;
  }
  throw new Error("Usuário não autenticado");
};

const registrarUsuario = async (usuario) => {
  try {
    console.log("Registrando usuário no Firebase...");
    const credenciaisUsuario = await createUserWithEmailAndPassword(auth, usuario.email, usuario.senha);
    const usuarioFirebase = credenciaisUsuario.user;
    console.log("Usuário registrado no Firebase:", usuarioFirebase);

    console.log("Obtendo token de autenticação...");
    const token = await obterTokenDeAutenticacao();

    console.log("Enviando dados adicionais para o backend...");
    const resposta = await axios.post(USUARIOS_URL + 'registrar', {
      CPF: usuario.cpf,
      Nome: usuario.nome,
      Email: usuario.email,
      Celular: usuario.celular,
      FotoUrl: usuario.fotoUrl,
      Admin: usuario.admin || false,
      Grupos: usuario.grupos || [],
      Tags: usuario.tags || [],
      uid: usuarioFirebase.uid,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log("Resposta do backend:", resposta.data);
    return resposta.data;
  } catch (erro) {
    console.error("Erro ao registrar usuário:", erro);
    throw new Error(erro.response?.data?.mensagem || erro.message || 'Erro ao registrar usuário');
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

const loginComGoogle = async () => {
  const provedor = new GoogleAuthProvider();
  try {
    console.log("Fazendo login com Google...");
    const credenciaisUsuario = await signInWithPopup(auth, provedor);
    const usuarioFirebase = credenciaisUsuario.user;
    console.log("Usuário logado com Google:", usuarioFirebase);

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
    console.error("Erro ao fazer login com Google:", erro);
    throw new Error(erro.response?.data?.mensagem || erro.message || 'Erro ao fazer login com Google');
  }
};

const loginComFacebook = async () => {
  const provedor = new FacebookAuthProvider();
  try {
    console.log("Fazendo login com Facebook...");
    const credenciaisUsuario = await signInWithPopup(auth, provedor);
    const usuarioFirebase = credenciaisUsuario.user;
    console.log("Usuário logado com Facebook:", usuarioFirebase);

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
    console.error("Erro ao fazer login com Facebook:", erro);
    throw new Error(erro.response?.data?.mensagem || erro.message || 'Erro ao fazer login com Facebook');
  }
};

export default {
  registrarUsuario,
  loginUsuario,
  loginComGoogle,
  loginComFacebook,
};