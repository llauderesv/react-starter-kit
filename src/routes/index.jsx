import Examples from '../components/Examples';
import Home from '../components/Home';

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
];

export default routes;
