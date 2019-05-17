import React, { Component } from 'react';
import chronosClient from '../../api/chronosClient';
import { employeeAutocomplete } from '../../api/employees';
import AjaxAutocomplete from '../autocomplete/AjaxAutocomplete';
// import AjaxAutocomplete from '../autocomplete/AjaxAutocomplete';

// const suggestions = value =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log('loading');
//       resolve(
//         [
//           { label: 'Afghanistan' },
//           { label: 'Aland Islands' },
//           { label: 'Albania' },
//           { label: 'Algeria' },
//           { label: 'American Samoa' },
//           { label: 'Andorra' },
//           { label: 'Angola' },
//           { label: 'Anguilla' },
//           { label: 'Antarctica' },
//           { label: 'Antigua and Barbuda' },
//           { label: 'Argentina' },
//           { label: 'Armenia' },
//           { label: 'Aruba' },
//           { label: 'Australia' },
//           { label: 'Austria' },
//           { label: 'Azerbaijan' },
//           { label: 'Bahamas' },
//           { label: 'Bahrain' },
//           { label: 'Bangladesh' },
//           { label: 'Barbados' },
//           { label: 'Belarus' },
//           { label: 'Belgium' },
//           { label: 'Belize' },
//           { label: 'Benin' },
//           { label: 'Bermuda' },
//           { label: 'Bhutan' },
//           { label: 'Bolivia, Plurinational State of' },
//           { label: 'Bonaire, Sint Eustatius and Saba' },
//           { label: 'Bosnia and Herzegovina' },
//           { label: 'Botswana' },
//           { label: 'Bouvet Island' },
//           { label: 'Brazil' },
//           { label: 'British Indian Ocean Territory' },
//           { label: 'Brunei Darussalam' }
//         ].map(m => ({ label: m.label, value: m.label }))
//       );
//     }, 3000);
//   });

class Home extends Component {
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <AjaxAutocomplete
          placeholder="Seleziona cose"
          apiService={employeeAutocomplete}
          onSelectedValue={val => console.log(val)}
        />
        <h1>Home, public</h1>
      </React.Fragment>
    );
  }
}

export default Home;
