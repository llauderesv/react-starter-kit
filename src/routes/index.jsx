import loadable from '@loadable/component';

const Home = loadable(() => import('../components/Home'));
const Examples = loadable(() => import('../components/Examples'));
const About = loadable(() => import('../components/About'));

/**
 * Collection of component routes
 *
 */
const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    path: '/examples',
    component: Examples,
  },
  {
    path: '/about',
    component: About,
  },
];

export default routes;
