const configuration = {
  client_id: 'chronos',
  redirect_uri: 'http://localhost:3000/authentication/callback',
  response_type: 'code',
  post_logout_redirect_uri: 'http://localhost:3000/',
  scope: 'openid profile email custom.profile',
  authority: 'https://aesys-identity.azurewebsites.net',
  silent_redirect_uri: 'http://localhost:3000/authentication/silent_callback',
  automaticSilentRenew: true,
  loadUserInfo: true,
  triggerAuthFlow: true
};

export default configuration;
