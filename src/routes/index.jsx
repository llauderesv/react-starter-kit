// Import all your components here...
import Examples from '../components/Examples';
import Home from '../components/Home';

/**
 * Object format: {
 *  exact: true,
 *  path: '/',
 *  component: Counter,
 * }
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
