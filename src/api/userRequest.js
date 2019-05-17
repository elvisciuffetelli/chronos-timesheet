import chronosClient from './chronosClient';

/**
 * @returns {Promise<[{count: 0, requests: [{
        "id": String,
        "requestType": 0 | 1 | 2,
        "requestReason": String,
        "fromDay": "DD-MM-YYYY",
        "toDay": "DD-MM-YYYY",
        "fromHour": String,
        "toHour": String,
        "requestState": String,
        "managementDate": String
      }]}>}
*/
function getPagedRequests({
  skip = 0,
  take = 20,
  requestType = 0,
  requestState = 0,
  fromDay = '01-01-1900',
  toDay = '01-01-1900'
}) {
  return chronosClient
    .get('/Request/GetPagedRequests', {
      params: {
        skip,
        take,
        requestType,
        requestState,
        fromDay,
        toDay
      }
    })
    .then(({ data }) => data.content);
}

export default getPagedRequests;
