import { createRouter, createWebHistory } from 'vue-router';
import PaginaLogin from '@/views/PaginaLogin.vue';
import PaginaCadastroLogin from '@/views/PaginaCadastroLogin.vue';
import FormularioCadastroLogin from '@/components/FormularioCadastroLogin.vue';
import LayoutPadrao from '@/layouts/LayoutPadrao.vue';

const routes = [
  {
    path: '/',
    name: 'PaginaLogin',
    component: PaginaLogin
  },
  {
    path: '/home',
    name: 'PaginaCadastroLogin',
    component: PaginaCadastroLogin,
    meta: { layout: LayoutPadrao }
  },
  {
    path: '/criar-conta',
    name: 'FormularioCadastroLogin',
    component: FormularioCadastroLogin
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = false; // Lógica de autenticação

  if (to.name !== 'PaginaLogin' && !isAuthenticated) next({ name: 'PaginaLogin' });
  else next();
});

export default router;