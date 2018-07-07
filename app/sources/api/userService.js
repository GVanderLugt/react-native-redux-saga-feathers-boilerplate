import client from './client';

export default (function UserService() {
  let service;

  if (!service) {
    service = client.service('users');
  }

  return service;
}());
