import axios from 'axios';
import history from '../../router/history';
import Interceptors from '../interceptors/Interceptors';

// The instances of the class API are used to centralize axios calls to the backend API
function kebabCaseToCamel(str) {
  return str.replace(/(-\w)/g, matches => matches[1].toUpperCase());
}

class API {
  constructor(props) {
    this.url = props.url;
    this.endpoints = {};
  }

  /**
   * Create and store a single entity's endpoints
   */
  createEntity(entity) {
    /**
     * If there is a - in the entity.name, then change it
     * to camelCase. E.g
     * ```
     * myApi.createEntity({ name : 'foo-bar'})
     * myApi.endpoints.fooBar.getAll(...)
     */
    const name = kebabCaseToCamel(entity.name);
    this.endpoints[name] = this.createBasicCRUDEndpoints(entity);
  }

  createEntities(arrayOfEntity) {
    arrayOfEntity.forEach(this.createEntity.bind(this));
  }

  /**
   * Create the basic endpoints handlers for CRUD operations
   */
  createBasicCRUDEndpoints(entity) {
    const endpoints = {};

    const resourceURL = `${this.url}/${entity.name}`;

    const token = sessionStorage.getItem('oidc.user:https://aesys-identity.azurewebsites.net:chronos');
    const parsedToken = JSON.parse(token);
    const HttpClient = axios.create({
      timeout: 8000,
      headers: token && { Authorization: `Bearer ${parsedToken.access_token}` },
    });

    // Add a request interceptor
    Interceptors.reqInterceptor(HttpClient);

    // Add a response interceptor
    Interceptors.resInterceptor(HttpClient, history);

    // CRUD
    endpoints.getAll = (query = {}, config = {}) => HttpClient
      .get(resourceURL, Object.assign({ params: query, config }))
      .then(response => response.data)
      .catch((error) => {
        console.log(`error! ${error}`);
      });

    endpoints.getOne = ({ id }, config = {}) => HttpClient
      .get(`${resourceURL}/${id}`, config)
      .then(response => response.data)
      .catch((error) => {
        console.log(`error! ${error}`);
      });

    endpoints.create = (toCreate, config = {}) => HttpClient
      .post(resourceURL, toCreate, config)
      .then(response => response.data)
      .catch((error) => {
        console.log(`error! ${error}`);
      });

    endpoints.update = (toUpdate, config = {}) => HttpClient
      .put(`${resourceURL}/${toUpdate.id}`, toUpdate, config)
      .then(response => response.data)
      .catch((error) => {
        console.log(`error! ${error}`);
      });

    endpoints.patch = ({ id }, toPatch, config = {}) => HttpClient
      .patch(`${resourceURL}/${id}`, toPatch, config)
      .then(response => response.data)
      .catch((error) => {
        console.log(`error! ${error}`);
      });

    endpoints.delete = ({ id }, config = {}) => HttpClient
      .delete(`${resourceURL}/${id}`, config)
      .catch((error) => {
        console.log(`error! ${error}`);
      });

    return endpoints;
  }
}

export default API;
