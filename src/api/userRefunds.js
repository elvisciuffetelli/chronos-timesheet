import chronosClient from './chronosClient';

function getPagedRefunds(value) {
  return chronosClient
    .get('/Refund/GetPagedRefunds', {
      value
    })
    .then(({ data }) =>
      data.content.refunds.map(refund => ({
        id: refund.id,
        fromDate: refund.fromDate,
        toDate: refund.toDate,
        type: refund.refundType,
        refundState: refund.refundState,
        documentId: refund.documentId,
        cost: refund.cost
      }))
    );
}

export default getPagedRefunds;
