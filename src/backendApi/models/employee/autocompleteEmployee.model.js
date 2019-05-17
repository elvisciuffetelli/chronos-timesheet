class AutocompleteEmployee {
  static fromBackend({ content }) {
    return {
      employees: content.employees
    };
  }
}

export default AutocompleteEmployee;
