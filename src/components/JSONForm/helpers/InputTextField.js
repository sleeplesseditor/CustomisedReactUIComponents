import React from 'react';

const InputTextField = ({ name, placeholder, required, _handleChange }) => (
    <div className="form-input-textfield">
        <label className="json-form-label">{placeholder}</label>
        <input 
            type="text"
            name={name}
            required={required}
            autoComplete="off"
            onChange={_handleChange}
        />
    </div>
);

export default InputTextField;