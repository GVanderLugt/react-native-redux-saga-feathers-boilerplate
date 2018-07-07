import { SESSION_CREATE, SESSION_VERIFY, SESSION_VALIDATE, SESSION_INVALIDATE } from '../constants/sessionTypes';

export function sessionCreate(params) {
  return {
    type:    SESSION_CREATE,
    payload: params,
  };
}

export function sessionVerify() {
  return {
    type: SESSION_VERIFY,
  };
}

export function sessionValidate() {
  return {
    type: SESSION_VALIDATE,
  };
}

export function sessionInvalidate() {
  return {
    type: SESSION_INVALIDATE,
  };
}
