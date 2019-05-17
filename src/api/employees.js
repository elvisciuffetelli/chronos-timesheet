import chronosClient from './chronosClient';

/**
 *  Ritorna l'autocomplete
 *  @param {String} value
 *  @returns {Promise<[{label: String, value: String}]}
 */
export function employeeAutocomplete(value) {
  return chronosClient
    .get('/Employee/GetEmployeesAutocomplete', {
      params: { StringToSearch: value }
    })
    .then(({ data }) =>
      data.content.employees.map(employee => ({
        label: employee.nameConcatLastname,
        value: employee.idEmployee
      }))
    );
}
