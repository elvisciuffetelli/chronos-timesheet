// Interceptors class
class Interceptors {
  static reqInterceptor(httpClient) {
    httpClient.interceptors.request.use(
      response => {
        console.log('Request interceptor', response);
        // spinning start to show
        document.body.classList.add('spinner');
        return response;
      },
      error => {
        if (error) {
          console.log(
            `%cINTERCEPTOR REQUEST ERROR: ${error}`,
            'color:red;font-weight:bold; background-color: #e7e7e7;'
          );
          // spinning hide
          document.body.classList.remove('spinner');
          // TODO: if (error === 401) auth.logout();
          // router.replace('/auth/login');
        }
        return Promise.reject(error);
      }
    );
  }

  // Add a response interceptor
  static resInterceptor(httpClient, history) {
    httpClient.interceptors.response.use(
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
                title: 'Error 401',
                body: 'You are not authorized. Please go to login',
                mainAction: 'Login',
                goToPathOnButtonClick: '/dashboard'
              }
            });
          }
        } else if (error.request) {
          console.log(error.request);
        }
        return Promise.reject(error);
      }
    );
  }
}

export default Interceptors;
