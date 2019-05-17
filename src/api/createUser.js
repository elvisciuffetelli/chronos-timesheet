import chronosClient from './chronosClient';

function createUser(value) {
  return chronosClient.post('/Employee/AddEmployee', value).then(({ data }) => data);
}

export default createUser;
