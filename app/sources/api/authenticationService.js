import client from './client';

export default (function UserService() {
  let service;

  if (!service) {
    service = client.service('authentication');
  }

  return service;
}());
