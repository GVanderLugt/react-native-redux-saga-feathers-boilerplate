import { normalize } from 'normalizr';
import { put } from 'redux-saga/effects';

// action creators
import {
  errorIndicator,
  load,
  success,
  successIndicator,
} from '../actions/httpActions';

export default function* (type, request, options = {}) {
  const { schema, entity, infiniteScroll } = options;

  yield put(load(type));

  try {
    const response = yield request;

    if (response && schema) {
      const normalizedData = normalize(response.data || response, schema);

      response.normalized = {
        entity,
        ...normalizedData,
      };
    }

    yield put(successIndicator(type));

    yield put(success(type, response, { infiniteScroll }));

    return response;
  } catch (err) {
    yield put(errorIndicator(type));

    throw err;
  }
}
