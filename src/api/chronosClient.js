import axios from 'axios';
import history from '../router/history';

const chronosClient = axios.create({
  timeout: 8000,
  baseURL: 'http://chronostimesheet-be.azurewebsites.net'
});

chronosClient.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem(
      'oidc.user:https://aesys-identity.azurewebsites.net:chronos'
    );
    const headers = {};
    // config.withCredentials(Bearer ${JSON.parse(token).access_token})

    if (token) headers.Authorization = `Bearer ${JSON.parse(token).access_token}`;

    config.headers = headers;

    console.log('Request interceptor', config);
    // spinning start to show
    document.body.classList.add('spinner');

    return config;
  },
  error => {
    if (error) {
      console.log(
        `%cINTERCEPTOR REQUEST ERROR: ${error}`,
        'color:red;font-weight:bold; background-color: #e7e7e7;'
      );
      // spinning hide
      document.body.classList.remove('spinner');
    }
    return Promise.reject(error);
  }
);

chronosClient.interceptors.response.use(
  response => {
    console.log('Response interceptor', response);
    // spinning hide
    document.body.classList.remove('spinner');
    return response;
  },
  error => {
    if (error) {
      console.log(
        `%cINTERCEPTOR RESPONSE ERROR: ${error}`,
        'color:red;font-weight:bold; background-color: #e7e7e7;'
      );
      // spinning hide
      document.body.classList.remove('spinner');
      // error handlers
      if (error.response.status === 401) {
        history.push({
          pathname: 'unauthorized',
          state: {
            title: 'Non sei autenticato',
            body: 'Clicca per autenticarti',
            mainAction: 'Login'
          }
        });
      }
    } else if (error.request) {
      console.log(error.request);
    }
    return Promise.reject(error);
  }
);

export default chronosClient;

// const token = sessionStorage.getItem('oidc.user:https://aesys-identity.azurewebsites.net:chronos');
// const parsedToken = JSON.parse(token);
