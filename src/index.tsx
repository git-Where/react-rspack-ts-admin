import * as ReactDOM from 'react-dom/client';
import App from './App'
import React, { Suspense } from 'react';
import {
    BrowserRouter as Router, HashRouter,
  } from "react-router-dom";
  import { Provider } from 'react-redux'
  import store from '~/store'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
    {/* <HashRouter> */}
        <Suspense fallback={<div>Loading...</div>}>
            <Provider store={store}>
                <App />
            </Provider>
        </Suspense>
    {/* </HashRouter> */}
    </React.StrictMode>
)