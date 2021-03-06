import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// using node-style package resolution in a CSS file: 
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import App from './App';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// adding i18n
import './i18n';
// adding redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allreducers from './Reducers';
// adding router
import {BrowserRouter} from 'react-router-dom';

const bloodDonateStore = createStore(
        allreducers , 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

ReactDOM.render(
    <Suspense fallback={(
        <div>Loading~~~</div>
    )}>
        <Provider store={bloodDonateStore}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </Suspense>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
