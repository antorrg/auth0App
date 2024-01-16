
```javascript
// Script uses auth0.js. See Remarks for details.
<script src="https://cdn.auth0.com/js/auth0/9.11/auth0.min.js"></script>
<script type="text/javascript">
  // Initialize the Auth0 application
  var webAuth = new auth0.WebAuth({
    domain:       '{yourDomain}',
    clientID:     '{yourClientId}'
  });

  // Parse the URL and extract the Access Token
  webAuth.parseHash(window.location.hash, function(err, authResult) {
    if (err) {
      return console.log(err);
    }
    webAuth.client.userInfo(authResult.accessToken, function(err, user) {
        // This method will make a request to the /userinfo endpoint
        // and return the user object, which contains the user's information,
        // similar to the response below.
    });
  });
</script>
```

GET /userinfo
Given the Auth0 Access Token obtained during login, this endpoint returns a user's profile.

This endpoint will work only if openid was granted as a scope for the Access Token. The user profile information included in the response depends on the scopes requested. For example, a scope of just openid may return less information than a a scope of openid profile email.

Request Parameters
Parameter	Description
access_token
REQUIRED	The Auth0 Access Token obtained during login.