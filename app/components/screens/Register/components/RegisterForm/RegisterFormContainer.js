import { reduxForm } from 'redux-form/immutable';
import validate from 'validate.js';

// components
import RegisterForm from './RegisterForm';

// schemas
const schema = {
  name: {
    presence: true,

    length: {
      maximum: 255,
    },
  },

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
  form:     'register',
  validate: validateForm,
  onChange: handleChange,
})(RegisterForm);
