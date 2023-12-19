import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CatalogView from '@/views/CatalogView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },

  {
    path: '/catalogo',
    name: 'catalog',
    component: CatalogView,
  }
]

const router = createRouter({
  scrollBehavior() {
    return { top: 0 };
  },
  history: createWebHistory(),
  routes
});

export default router;
