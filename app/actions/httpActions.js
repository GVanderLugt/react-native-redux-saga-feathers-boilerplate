export function doneIndicator(type) {
  return {
    type: `${type}_DONE`,
  };
}

export function errorIndicator(type) {
  return {
    type: `${type}_ERROR`,
  };
}

export function error(type, err) {
  return {
    type,
    payload: err,

    meta: {
      error: true,
    },
  };
}

export function load(type) {
  return {
    type,
    meta: {
      loading: true,
    },
  };
}

export function success(type, payload, meta = {}) {
  return {
    type,
    payload,
    meta: {
      infiniteScroll: meta.infiniteScroll || false,
    },
  };
}

export function successIndicator(type) {
  return {
    type: `${type}_SUCCESS`,
  };
}
