class GetMe {
  static fromBackend({ content }) {
    return {
      id: content.id,
      email: content.email,
      name: content.name,
      lastName: content.lastName,
    };
  }
}

export default GetMe;
