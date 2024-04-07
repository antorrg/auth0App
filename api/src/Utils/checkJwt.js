const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');
// require ('dotenv').config();
// const {MY_DOMAIN} = process.env;

const checkScopes = requiredScopes('read:messages');

// const checkJwt = auth({
//     audience: '{yourApiIdentifier}',
//     issuerBaseURL: `https://{yourDomain}/`,
//   });

const jwtCheck = auth({
    audience: 'http://localhost:3001',
    issuerBaseURL: `https://${MY_DOMAIN}/`,//'https://dev-mg7v1nvcxu1guo4c.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });
  
  module.exports = {
    jwtCheck,
    checkScopes
  };



