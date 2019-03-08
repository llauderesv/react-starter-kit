import React from 'react';

import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="header">
        <div className="header-wrapper">
          <h1>Welcome to React starter kit.</h1>
          <h3>A simple React setup using Webpack with Jest integration. </h3>
          <div className="build-status">
            <a href="https://github.com/llauderesv/react-starter-kit">
              <img
                src="https://travis-ci.org/llauderesv/react-starter-kit.svg?branch=master"
                alt="travis-ci-build"
              />
            </a>
          </div>
          <small>
            For more info, follow me on twitter
            <a href="https://twitter.com/llaudevc">llaudevc</a>.
          </small>
        </div>
      </div>

      <div className="documentation">
        <h2>Steps to run the project.</h2>

        <div className="code-container">
          <p>Running development mode.</p>
          <pre>npm run dev</pre>
        </div>

        <div className="code-container">
          <p>Running production mode.</p>
          <pre>npm run dev</pre>
        </div>

        <div className="code-container">
          <p>Running unit test.</p>
          <pre>npm run test</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
