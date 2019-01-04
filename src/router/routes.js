import Home from '@pages/Home.vue';
import GroupsList from '@pages/GroupsList.vue';

const routes = [
  {
    path: '/',
    redirect: 'groups',
    name: 'home',
    component: Home
  },
  {
    path: '/groups',
    name: 'groups',
    component: GroupsList
  }
];

export default routes;