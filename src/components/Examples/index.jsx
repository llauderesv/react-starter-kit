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
    desc: `
      This counter example is used to demonstrate how to call an 
      action in redux by dispatching actionCreators to increment the value in counter reducer. 
      We also used an increment async to demonstrate how asynchronous action works.
    `,
    path: '/counter',
    component: Counter,
  },
  {
    title: 'Displaying global message',
    desc: `
      Used to notify user's when there's an error or a problem in network
      connectivity and display it in your web app.`,
    path: '/error-message',
    component: DisplayErrorMessage,
  },
  {
    title: 'Fetched data in API',
    desc: `
      This example is fetching data in web service using redux-saga
    `,
    path: '/fetching-data',
    component: User,
  },
  {
    title: 'Compose',
    desc: `
      Compose helper function is a technique or pattern that emerges in Functional programming.
      It's used to combine multiple functions into one and return an enhance function.
      Why this important? Remember, in React when you're creating a component you should always
      keep in mind that your component is composable meaning it can be used by other component w/out
      using too much dependencies or boilerplate code. If you want to dive in depth you can read the whole article here with a great example.
      https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10
    `,
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
