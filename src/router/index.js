import { createRouter, createWebHistory } from 'vue-router';
import PaginaApresentacao from '@/views/PaginaApresentacao.vue';
import LayoutApresentacao from '@/layouts/LayoutApresentacao.vue';
import PaginaLogin from '@/views/PaginaLogin.vue';
import LayoutLogin from '@/layouts/LayoutLogin.vue';

const routes = [
  {
    path: '/sinalize',
    name: 'PaginaApresentacao',
    component: PaginaApresentacao,
    meta: { layout: LayoutApresentacao }
  },
  {
    path: '/login',
    name: 'PaginaLogin',
    component: PaginaLogin,
    meta: { layout: LayoutLogin }
  },
  {
    path: '/',
    redirect: '/sinalize'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = false; // Lógica de autenticação

  if (to.name !== 'PaginaLogin' && to.name !== 'PaginaApresentacao' && !isAuthenticated) {
    next({ name: 'PaginaApresentacao' });
  } else {
    next();
  }
});

export default router;