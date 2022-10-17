import React from 'react';
import './scss/index.scss';
import App from './App';
import './scss/reset.css'
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {store} from "./redux/store";

const root = createRoot(document.getElementById('root') as any);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
