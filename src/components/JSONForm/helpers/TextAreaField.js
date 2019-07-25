import React from 'react';

const TextAreaField = ({ name, placeholder, required, _handleChange }) => (
    <div className="form-input-textarea">
        <label className="dropdown-label">{placeholder}</label>
        <textarea 
            type="text"
            name={name}
            required={required}
            style={{ height: "80px" }}
            autoComplete="off"
            // placeholder={placeholder}
            onChange={_handleChange}
        />
    </div>
);

export default TextAreaField;