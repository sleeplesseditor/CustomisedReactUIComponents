import React, { Component } from "react";
import { DropDownSelect, InputTextField, TextAreaField } from './helpers';

class JSONForm extends Component {
    state = {
        fields: [ 
            { 
                placeholder: "Purpose of Loan", 
                name: "name", 
                input_type: "dropdown", 
                required: true, 
                values: [ 
                    "Home Loan", 
                    "Business Loan", 
                    "Working Capital", 
                    "Personal Loan", 
                    "Education Loan", 
                    "Loan Against Property", 
                    "Others" 
                ] 
            }, 
            { 
                placeholder: "Query", 
                name: "remaining_values", 
                input_type: "big_text", 
                required: true 
            }, 
            { 
                placeholder: "Email", 
                name: "email", 
                input_type: "text", 
                required: true 
            }, 
            { 
                placeholder: "Time", 
                name: "contact_time", 
                input_type: "text", 
                required: true 
            } 
        ]
    }

    submitForm = event => {
        const { fields, ...inputFields } = this.state;
        console.log(inputFields);
        event.preventDefault();
    }

    _handleChange = event => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
    };

    render() {
        const { fields } = this.state;
        return (
            <React.Fragment>
                <h3>JSON Form Variant</h3>
                <form 
                    className="json-form"
                    onSubmit={this.submitForm}
                >
                    {fields.map(form => {
                        if (form.input_type === "text") {
                            return (
                                <div 
                                    className="form-element-container"
                                    key={form.placeholder}
                                >
                                    <InputTextField 
                                        name={form.name}
                                        placeholder={form.placeholder}
                                        required={form.required}
                                        key={form.placeholder}
                                        _handleChange={this._handleChange}
                                    />
                                </div>
                            );
                        }
                        if (form.input_type === "big_text") {
                            return (
                                <div 
                                    className="form-element-container"
                                    key={form.placeholder}
                                >
                                    <TextAreaField 
                                        name={form.name}
                                        placeholder={form.placeholder}
                                        required={form.required}
                                        key={form.placeholder}
                                        _handleChange={this._handleChange}
                                    />
                                </div>
                            );
                        }
                        if (form.input_type === "dropdown") {
                            return (
                                <div 
                                    className="form-element-container"
                                    key={form.placeholder}
                                >
                                    <DropDownSelect 
                                        name={form.name}
                                        placeholder={form.placeholder}
                                        required={form.required}
                                        val={form.values}
                                        key={form.placeholder}
                                        _handleChange={this._handleChange}
                                    />
                                </div>
                            );
                        }
                        return null;
                    })}
                    <input 
                        className="json-submit-button"
                        type="submit" 
                    />
                </form>
            </React.Fragment>
        )
    }
};

export default JSONForm;