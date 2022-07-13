import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: './Home',
    },
    {
      path: '/graph',
      component: './Graph',
    },
    {
      path: '/counter',
      component: './Counter',
    },
  ],
  npmClient: 'pnpm',
  
});
