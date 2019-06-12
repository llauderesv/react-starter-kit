import Home from '../components/Home';
import Examples from '../components/Examples';
import About from '../components/About';

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
