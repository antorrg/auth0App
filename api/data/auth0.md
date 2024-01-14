# Configurar Auth0:

## Obtenga sus claves de aplicación
Cuando se registró en Auth0, se creó una nueva fue creada para usted. Necesitará algunos detalles sobre esa aplicación para comunicarse con Auth0. Puede obtener estos detalles en la sección Configuración de la aplicación en el panel de Auth0.

![dasboard](./assets/dashboard)

Cuando utilice la aplicación predeterminada con una aplicación nativa o single-page, asegúrese de actualizar Token Endpoint Authentication Method a None y establezca el Application Type en SPA o Native.

Usted necesitará la siguiente información:

* Domain:
* Client ID:
> (Si usted descargó el ejemplo de esta página, estos detalles están llenados para usted).


## Configure la callback URL:
Una Callback URL es una URL en su aplicación donde Auth0 redirige al usuario después de que se haya autenticado. La Callback URL  para su aplicación debe agregarse al campo URL de Callback URL  permitidas en la configuración de su aplicación. Si este campo no está configurado, los usuarios no podrán iniciar sesión en la aplicación y recibirán un error.

>Si está siguiendo con el proyecto de ejemplo que descargó de la parte superior de la página, debe colocar la Allowed Callback URL en http://localhost:3000.

## Configurar LOGOUT URLs

Una LOGOUT URL es una URL en su aplicación a la que Auth0 puede regresar después de que el usuario haya cerrado sesión en el servidor autorizado Esto se especifica en el parámetro de consulta returnTo. La LOGOUT URL de su aplicación debe agregarse al campo URL de cierre de sesión permitidas en la configuración de su aplicación. Si este campo no está configurado, los usuarios no podrán cerrar sesión en la aplicación y recibirán un error.

> Si usted continúa con el mismo ejemplo que descargó  la URL que debe añadir en el campo de la Allowed Logout URLs es http://localhost:3000.

## Instale el SDK auth0-react

Corra el siguiente comando en la carpeta raíz de su proyecto para instalar el sdk auth0-react:

```javascript
npm install @auth0/auth0-react
```
## Configuer el componente Auth0Provider
Por detrás, el SDK de Auth0 React utiliza React Context para administrar el estado de autenticación de sus usuarios. Una forma de integrar Auth0 con su aplicación React es abrazar a su componente raíz con un Auth0Provider que puede importar desde el SDK.

```javascript
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-mg7v1nvcxu1guo4c.us.auth0.com"
    clientId="fvjAZk84Tf7LckbTiboFfdbuFXi7m7zQ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);
```
