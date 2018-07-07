import { AsyncStorage } from 'react-native';
import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import auth from '@feathersjs/authentication-client';

export default (function Client() {
  let client;

  if (!client) {
    client = feathers()
      .configure(rest('http://localhost:3030').fetch(fetch))
      .configure(auth({ storage: AsyncStorage }));
  }

  return client;
}());

export function find(service, ...params) {
  return service.find(...params);
}

export function get(service, ...params) {
  return service.get(...params);
}

export function create(service, ...params) {
  return service.create(...params);
}

export function update(service, ...params) {
  return service.update(...params);
}

export function patch(service, ...params) {
  return service.patch(...params);
}

export function remove(service, ...params) {
  return service.remove(...params);
}
