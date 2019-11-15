/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import Validator from "validator";
import InlineError from "../messages/InlineError";

class NewEntryForm extends React.Component {
    state = {
        data: {
            name: "",
            category: "",
            description: "",
            email: ""
        },
        loading: false,
        errors: {}
    }

    onChange = e =>
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    onSubmit = e => { 
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.props.submit(this.state.data);
        } else { 
            e.preventDefault();
        }
    }

    validate = (data) => {
        const errors = {};
        if (!data.name) errors.name = "name cannot be blank";
        if (!data.category) errors.category = "category cannot be blank";
        if (!data.description) errors.description = "description cannot be blank";
        if (!Validator.isEmail(data.email)) { errors.email = "invalid email"; }
        return errors;
    }
    
    render() {
        const { data, errors } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <h3>Name:</h3>
                        <input type="text" name="name" onChange={this.onChange} value={data.name} />
                    </div>
                    {errors.name && <InlineError text={errors.name} />}
                    <div>
                        <h3>Description:</h3>
                        <input type="text" name="description" id="description" onChange={this.onChange} value={data.description} />
                    </div>
                    {errors.description && <InlineError text={errors.description} />}
                    <div>
                        <h3>Category:</h3>
                        <select name="category" value={data.category} onChange={this.onChange}>
                            <option value="" />
                            <option value="pets">Pets</option>
                            <option value="accidents">Accidents</option>
                            <option value="broken window">Broken Window</option>
                        </select>
                    </div>
                    {errors.category && <InlineError text={errors.category} />}
                    <div error="false">
                        <h3>Email:</h3>
                        <input type="email" name="email" placeholder="example@mail.com" value={data.email} onChange={this.onChange} />
                    </div>
                    {errors.email && <InlineError text={errors.email} />}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

NewEntryForm.propTypes = {
    submit: PropTypes.func
};

export default NewEntryForm;
