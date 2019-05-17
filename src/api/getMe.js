import chronosClient from './chronosClient';

function getMe() {
  return chronosClient.get('/Account/GetMe').then(({ data }) => data);
}

export default getMe;
