import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/CocktailCard.vue';
import CocktailDetail from './components/CocktailDetail.vue';
import AllCocktails from './components/AllCocktails.vue';
import AllMocktails from './components/AllMocktails.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/cocktail/:id', component: CocktailDetail, props: true },
  { path: '/all-cocktails', component: AllCocktails },
  { path: '/all-mocktails', component: AllMocktails }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;