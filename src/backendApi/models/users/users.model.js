class UserModel {
  static fromBackend(data) {
    return {
      id: data.id,
      colOne: data.name,
      colTwo: data.username,
      colThree: data.email,
      colFour: data.address.city,
      colFive: data.address.street,
    };
  }
}

export default UserModel;
