import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store.js'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'
import './index.css'
import axios from 'axios'

const auth0domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const domain = import.meta.env.VITE_DOMAIN;
const url = import.meta.env.VITE_URL;

axios.defaults.baseURL = url;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain={auth0domain}
    clientId={clientId}
    authorizationParams={{redirect_uri: window.location.origin,
      audience: `https://${domain}/api/v2/`,
      scope: "read:current_user update:current_user_metadata"}}>
    <Provider store={store}>
      <BrowserRouter>
       <App />
      </BrowserRouter>
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
)
