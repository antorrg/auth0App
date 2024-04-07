import { render } from 'preact'
import { App } from './app.jsx'
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './redux/store.js'
import axios from 'axios'
import './index.css'
const url = import.meta.env.VITE_URL;

axios.defaults.baseURL = url;

render(
    <Provider store={store}>
    <BrowserRouter>
     <App />
    </BrowserRouter>
    </Provider>
, document.getElementById('app'))
