import axios from 'axios';
import { auth } from "@/firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const API_URL = process.env.VUE_APP_API_URL; 
const USUARIOS_URL = `${API_URL}/Usuarios`; 

const registrarUsuario = async (usuario) => {
  try {
    // Registrar usuário no Firebase
    const credenciaisUsuario = await createUserWithEmailAndPassword(auth, usuario.email, usuario.senha);
    const usuarioFirebase = credenciaisUsuario.user;

    // Adicionar informações adicionais no backend
    const resposta = await axios.post(USUARIOS_URL, {
      ...usuario,
      uid: usuarioFirebase.uid,
    });

    return resposta.data;
  } catch (erro) {
    throw new Error(erro.response?.data?.mensagem || erro.message || 'Erro ao registrar usuário');
  }
};

const loginUsuario = async (email, senha) => {
  try {
    // Login no Firebase
    const credenciaisUsuario = await signInWithEmailAndPassword(auth, email, senha);
    const usuarioFirebase = credenciaisUsuario.user;

    // Obter informações adicionais do backend
    const resposta = await axios.get(`${USUARIOS_URL}/${usuarioFirebase.uid}`);
    return resposta.data;
  } catch (erro) {
    throw new Error(erro.response?.data?.mensagem || erro.message || 'Erro ao fazer login');
  }
};

const loginComGoogle = async () => {
  const provedor = new GoogleAuthProvider();
  try {
    const credenciaisUsuario = await signInWithPopup(auth, provedor);
    const usuarioFirebase = credenciaisUsuario.user;

    // Obter informações adicionais do backend
    const resposta = await axios.get(`${USUARIOS_URL}/${usuarioFirebase.uid}`);
    return resposta.data;
  } catch (erro) {
    throw new Error(erro.response?.data?.mensagem || erro.message || 'Erro ao fazer login com Google');
  }
};

const loginComFacebook = async () => {
  const provedor = new FacebookAuthProvider();
  try {
    const credenciaisUsuario = await signInWithPopup(auth, provedor);
    const usuarioFirebase = credenciaisUsuario.user;

    // Obter informações adicionais do backend
    const resposta = await axios.get(`${USUARIOS_URL}/${usuarioFirebase.uid}`);
    return resposta.data;
  } catch (erro) {
    throw new Error(erro.response?.data?.mensagem || erro.message || 'Erro ao fazer login com Facebook');
  }
};

export default {
  registrarUsuario,
  loginUsuario,
  loginComGoogle,
  loginComFacebook,
};