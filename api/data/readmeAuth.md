# Agregar autorización a una aplicación API express.js
Esta guía demuestra cómo integrar Auth0 con cualquier aplicación API Express.JS nueva o existente utilizando el paquete express-oauth2-jwt-bearer package.

Si aún no ha creado una API en su tablero Auth0, use el selector Interactive para crear una nueva Auth0 API o seleccionar una API de proyecto existente.

Para configurar su primera API a través del tablero Auth0, revise nuestra guía de inicio. Cada Auth0 API utiliza el identificador API, que su aplicación necesita para validar el access token.
<br>

## 1)  Definir permisos
Los permisos le permiten definir cómo se puede acceder a los recursos en nombre del usuario con un token de acceso dado. Por ejemplo, puede optar por otorgar acceso de lectura al recurso de mensajes si los usuarios tienen el nivel de acceso del administrador y un acceso de escritura a ese recurso si tienen el nivel de acceso del administrador.

Puede definir los permisos permitidos en la vista de permisos de la sección API del tablero Auth0.

## 2) Instalar dependencias
Primero, instale el SDK con npm.
```npm install --save express-oauth2-jwt-bearer```

## 3) Configurar el middleware
Configure express-oauth2-jwt-tearer con su identificador de dominio y API.

El middleware checkJwt muestra a las verificaciones correctas si el token de acceso del usuario incluido en la solicitud es válido. Si el token no es válido, el usuario recibe un error de autorización 401 cuando intenta acceder a los endpoints.

El middleware no verifica si el token tiene suficiente alcance para acceder a los recursos solicitados.
```javascript
const express = require('express');
const app = express();
const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: '{yourApiIdentifier}',
  issuerBaseURL: `https://{yourDomain}/`,
});

// This route doesn't need authentication
app.get('/api/public', function(req, res) {
  res.json({
    message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
  });
});

// This route needs authentication
app.get('/api/private', checkJwt, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.'
  });
});

const checkScopes = requiredScopes('read:messages');

app.get('/api/private-scoped', checkJwt, checkScopes, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
  });
});

app.listen(3000, function() {
  console.log('Listening on http://localhost:3000');
});
```
## 4) Proteger los endpoints de la API
Para proteger una ruta individual al requerir un JWT válido, configure la ruta con el middleware checkJWT construido a partir de express-oauth2-jwt-bearer.

Puede configurar rutas individuales para buscar un particular scope. Para lograr eso, configure otro middleware con el método "requiresScope". Proporcione los scopes requeridos y aplique el middleware a cualquier ruta a las que desee agregar autorización.

Pase el checkjwt y el middleware requiresScope a la ruta que desea proteger.

En esta configuración, solo access tokens con el alcance "read:messages" pueden acceder al endpoint.

### Haz una llamada a tu API


Para hacer llamadas a su API, necesita un token de acceso. Puede obtener un token de acceso para fines de prueba desde la vista de prueba en la configuración de su API.


----------------------
Fichas versus cookies
Por lo general, aplicaciones de una sola página (como React, Vue y AngularJS + Node), aplicaciones móviles nativas (como iOS y Android) y API web (escritas en Node, Ruby, ASP.NET o una combinación de ellas) beneficiarse al máximo de la autenticación basada en tokens. Las aplicaciones web tradicionales del lado del servidor han utilizado tradicionalmente la autenticación basada en cookies.

La autenticación basada en token se implementa generando un token cuando el usuario se autentica y luego estableciendo ese token en el encabezado de Autorización de cada solicitud posterior a su API. Desea que ese token sea algo estándar, como tokens web JSON, ya que encontrará bibliotecas en la mayoría de las plataformas y no desea crear su propia criptografía.

Con ambos enfoques, puedes obtener la misma cantidad de información del usuario. Esto está controlado por el parámetro de alcance enviado en la solicitud de inicio de sesión (ya sea usando Lock, nuestra biblioteca de JavaScript o un enlace simple). El alcance es un parámetro del método .signin({scope: 'openid name email'}) que termina siendo parte de la cadena de consulta en la solicitud de inicio de sesión.

De forma predeterminada, usamos alcance=openid en la autenticación basada en token para evitar tener un token enorme. Puede controlar cualquier notificación estándar de OpenID Connect (OIDC) que desee incluir en el token agregándola como valores de alcance. Por ejemplo, alcance=openid nombre correo electrónico nombre_familia dirección número_teléfono. Para obtener más información, consulte Reclamaciones estándar en openid.net.

Puede combinar la autenticación basada en tokens con la autenticación basada en cookies. Tenga en cuenta que las cookies funcionarán bien si la aplicación web y la API se sirven desde el mismo dominio, por lo que es posible que no necesite autenticación basada en token. Si es necesario, también devolvemos un JWT en el flujo de la aplicación web. Cada uno de nuestros SDK lo hará de manera diferente. Si desea llamar a sus API desde JavaScript (en lugar de usar la cookie existente), debe configurar los tokens de acceso mediante Web Workers o cierres de JavaScript para manejar las transmisiones y el almacenamiento de tokens. Para obtener más información, lea la sección Escenarios en memoria del navegador de nuestra página Almacenamiento de tokens.