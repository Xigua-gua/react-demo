
import React from 'react'
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// import * as serviceWorker from './serviceWorker';
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

// serviceWorker.unregister();


registerServiceWorker();

/*
Provider组件是让所有的组件可以访问到store。不用手动去传。也不用手动去监听。

connect函数作用是从 Redux state 树中读取部分数据，
并通过 props 来把这些数据提供给要渲染的组件。也传递dispatch(action)函数到props。
 */
