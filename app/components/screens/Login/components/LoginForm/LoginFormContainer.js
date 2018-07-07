import { reduxForm } from 'redux-form/immutable';
import validate from 'validate.js';

// components
import LoginForm from './LoginForm';

// schemas
const schema = {
  email: {
    presence: true,

    email: {
      message: 'not valid',
    },

    length: {
      maximum: 255,
    },
  },

  password: {
    presence: true,

    length: {
      minimum: 8,
      maximum: 255,
    },
  },
};

const validateForm = function (form) {
  return validate(form.toJS(), schema);
};

const handleChange = function (fields, dispatch, { stopSubmit, submitFailed }) {
  if (submitFailed) { stopSubmit(); }
};

export default reduxForm({
  form:     'login',
  validate: validateForm,
  onChange: handleChange,
})(LoginForm);
