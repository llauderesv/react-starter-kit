import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

// Components section
import Counter from './Counter';
import DisplayErrorMessage from './DispatchErrorMessage';
import User from './User';
import EnhancedHelloWorld from './HigherOrderComponent';
import Form from './Forms';

import './index.scss';

/**
 * Collection of examples Component with their details
 *
 */
const examplesComponents = [
  {
    title: 'Counter',
    desc:
      'This counter is sample of dispatching action with ' +
      'changing the state of the app and updating the reducer in your store.',
    path: '/counter',
    component: Counter,
  },
  {
    title: 'Displaying error message',
    desc:
      'Notify your user when there was a problem in your network ' +
      'connectivity and display it in your web app.',
    path: '/error-message',
    component: DisplayErrorMessage,
  },
  {
    title: 'Fetching data in web service',
    desc: 'Description: Fetching data using redux saga',
    path: '/fetching-data',
    component: User,
  },
  {
    title: 'Higher Order Component using compose function',
    desc:
      'This sample is randomly throwing an error. Once there was an ' +
      'error you can also retry fetching the data.',
    path: '/hoc-compose',
    component: EnhancedHelloWorld,
  },
  {
    title: 'Forms',
    desc: 'Using forms in react by submitting it to server side.',
    path: '/forms',
    component: Form,
  },
];

const withContainerExample = BaseComponent => ({ title, desc }) => {
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <p>{desc}</p>
      <BaseComponent />
    </React.Fragment>
  );
};

const Examples = ({ match }) => {
  return (
    <div className="examples-wrapper">
      <div className="sidebar">
        <p className="title">Examples</p>
        <div className="list-container">
          <ul className="examples-lists">
            <li>
              <Link to={`${match.url}/counter`}>Counter</Link>
            </li>
            <li>
              <Link to={`${match.url}/error-message`}>
                Displaying error message
              </Link>
            </li>
            <li>
              <Link to={`${match.url}/fetching-data`}>Fetching data</Link>
            </li>
            <li>
              <Link to={`${match.url}/hoc-compose`}>
                Compose helper function
              </Link>
            </li>
            <li>
              <Link to={`${match.url}/forms`}>Forms</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="content">
        <Switch>
          {examplesComponents.map((item, id) => {
            const { path, component } = item;
            const EnhanceComponent = withContainerExample(component);

            return (
              <Route
                key={id}
                path={`${match.url}${path}`}
                render={() => <EnhanceComponent {...item} />}
              />
            );
          })}
          <Route
            exact
            path={`${match.url}`}
            render={() => <h1>Choose an example.</h1>}
          />
        </Switch>
      </div>
    </div>
  );
};

export default Examples;
