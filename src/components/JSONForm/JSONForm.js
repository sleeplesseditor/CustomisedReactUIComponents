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
                placeholder: "Enter Your Name Here", 
                name: "remaining_values", 
                input_type: "big_text", 
                required: true 
            }, 
            { 
                placeholder: "Enter Your Email Here", 
                name: "email", 
                input_type: "text", 
                required: true 
            }, 
            { 
                placeholder: "Prefered time to call you", 
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
            <form 
                className="json-form"
                onSubmit={this.submitForm}
            >
                {fields.map(form => {
                    if (form.input_type === "text") {
                        return (
                            <InputTextField 
                                name={form.name}
                                placeholder={form.placeholder}
                                required={form.required}
                                key={form.placeholder}
                                _handleChange={this._handleChange}
                            />
                        );
                    }
                    if (form.input_type === "big_text") {
                        return (
                            <TextAreaField 
                                name={form.name}
                                placeholder={form.placeholder}
                                required={form.required}
                                key={form.placeholder}
                                _handleChange={this._handleChange}
                            />
                        );
                    }
                    if (form.input_type === "dropdown") {
                        return (
                            <DropDownSelect 
                                name={form.name}
                                placeholder={form.placeholder}
                                required={form.required}
                                val={form.values}
                                key={form.placeholder}
                                _handleChange={this._handleChange}
                            />
                        );
                    }
                })}
                <input type="submit" />
            </form>
        )
    }
};

export default JSONForm;