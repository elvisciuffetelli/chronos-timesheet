import * as Yup from 'yup';

const userSchema = () =>
  Yup.object().shape({
    firstName: Yup.string('Inserisci il nome').required('Il nome è richiesto'),
    lastName: Yup.string('Inserisci il cognome').required('Il cognome è richiesto'),
    fiscalCode: Yup.string('Inserisci il codice fiscale').required('Il codice fiscale è richiesto'),
    adminOptions: Yup.array()
      .min(1)
      .required('I ruoli sono richiesti'),
    userOptions: Yup.array()
      .min(1)
      .required('I ruoli sono richiesti'),
    superUserOptions: Yup.array()
      .min(1)
      .required('I ruoli sono richiesti'),
    email: Yup.string('Inserisci la mail')
      .email('Inserisci una mail valida')
      .required('La Email è richiesta'),
    dateOfBirth: Yup.date().required('BLa data di nascita è richiesta'),
    password: Yup.string('')
      .min(8, 'La Password deve avere almeno 8 caratteri')
      .required('Inserisci la password'),
    confirmPassword: Yup.string('conferma la password')
      .required('Confirma la password')
      .oneOf([Yup.ref('password')], 'La password non coincide')
  });

export default userSchema;
