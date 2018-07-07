import client from '../sources/api/client';

export default function* () {
  if (!client.settings.accessToken) {
    yield client.authenticate();
  }
}
