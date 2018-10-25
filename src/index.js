
import React from 'react'
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './root';

function render(Component) {
  ReactDOM.render(<Component />, document.getElementById('root'));
}

render(App);

if (module.hot) {
    module.hot.accept('./root', () => {
        const NextApp = require('./root').default;
        render(NextApp);
    });
}

registerServiceWorker();
