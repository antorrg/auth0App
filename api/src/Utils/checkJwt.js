const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');

// const checkJwt = auth({
//     audience: '{yourApiIdentifier}',
//     issuerBaseURL: `https://{yourDomain}/`,
//   });

const jwtCheck = auth({
    audience: 'http://localhost:3001',
    issuerBaseURL: 'https://dev-mg7v1nvcxu1guo4c.us.auth0.com.auth0.com/',//'https://dev-mg7v1nvcxu1guo4c.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });
  
  module.exports = jwtCheck;
  