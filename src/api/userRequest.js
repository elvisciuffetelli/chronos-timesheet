import chronosClient from './chronosClient';

function getPagedRequests(value) {
  return chronosClient
    .get('/Request/GetPagedRequests', {
      value
    })
    .then(({ data }) =>
      data.content.requests.map(request => ({
        id: request.id,
        type: request.requestType,
        fromDay: request.fromDay,
        toDay: request.toDay,
        fromHour: request.fromHour,
        toHour: request.toHour,
        reason: request.requestReason,
        requestState: request.requestState,
        managementDate: request.managementDate
      }))
    );
}

export default getPagedRequests;
