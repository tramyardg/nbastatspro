import React from 'react';
import PropTypes from 'prop-types';

const FormInput = (props) => (
    <div className="form-group">
      <input
          className="form-control"
          type={props.inputType}
          name={props.inputName}
          id={props.inputName + 'Id'}
          onChange={props.onChangeFn}
          placeholder={props.inputPlaceholder}
      />
    </div>
);

let inputTypes = ['text', 'number', 'email', 'password'];
FormInput.propTypes = {
  inputType: PropTypes.oneOf(inputTypes).isRequired,
  inputName: PropTypes.string.isRequired,
  onChangeFn: PropTypes.func.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
};

export default FormInput;