import React, { Component } from "react";
import { DropDownSelect, InputTextField, TextAreaField } from './helpers';

class JSONFormTable extends Component {
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

    renderSelect = () => {
        const { fields } = this.state;
            return (
                <td colSpan="3">
                {fields.map(form => {
                    if (form.input_type === "dropdown") {
                        return (
                            <DropDownSelect 
                                name={form.name}
                                required={form.required}
                                val={form.values}
                                key={form.placeholder}
                                _handleChange={this._handleChange}
                            />
                        );
                    }
                    return null;  
                })}
            </td>
        )
    }

    renderTextArea = () => {
        const { fields } = this.state;
            return (
                <td colSpan="3">
                {fields.map(form => {
                    if (form.input_type === "big_text") {
                        return (
                            <TextAreaField 
                                name={form.name}
                                required={form.required}
                                key={form.placeholder}
                                _handleChange={this._handleChange}
                            />
                        );
                    }
                    return null;  
                })}
            </td>
        )
    }

    renderEmailInput = () => {
        const { fields } = this.state;
            return (
                <td>
                    {fields.map(form => {
                        if (form.placeholder === "Email") {
                            return (
                                <InputTextField 
                                    name={form.name}
                                    required={form.required}
                                    key={form.placeholder}
                                    _handleChange={this._handleChange}
                                />
                            );
                        }
                        return null; 
                    })}
                </td>
        )
    }

    renderTimeInput = () => {
        const { fields } = this.state;
            return (
                <td>
                    {fields.map(form => {
                        if (form.placeholder === "Time") {
                            return (
                                <InputTextField 
                                    name={form.name}
                                    required={form.required}
                                    key={form.placeholder}
                                    _handleChange={this._handleChange}
                                />
                            );
                        }
                        return null; 
                    })}
                </td>
        )
    }
    

    render() {
        return (
            <React.Fragment>
                <h3>JSON Table Variant</h3>
                <form 
                    className="json-form"
                    onSubmit={this.submitForm}
                >
                    <table>
                        <tbody>
                            <tr>
                                <th>Purpose of Loan</th>
                                    {this.renderSelect()}
                            </tr>
                            <tr>
                                <th>Query</th>
                                    {this.renderTextArea()}
                            </tr>
                            <tr>
                                <th>Email</th>
                                    {this.renderEmailInput()}
                                <th>Time</th>
                                    {this.renderTimeInput()}
                            </tr>
                        </tbody>
                    </table>
                    <input 
                        className="json-submit-button"
                        type="submit" 
                    />
                </form>
            </React.Fragment>
        )
    }
};

export default JSONFormTable;