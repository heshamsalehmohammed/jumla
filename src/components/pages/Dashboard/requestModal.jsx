import React, { Component } from 'react';
import $ from 'jquery/dist/jquery.min.js';
import Joi from 'joi-browser';
import { Validate, ValidateProperty } from '../../common/validation';

export default class RequestModal extends Component {


    
    constructor(props) {
        super(props);

        this.state = {
            request: {
                Message: ""
            },
            errors: []
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    schema = {
        Message: Joi.string().required().label("Message")
    };

    onChange(e) {
        let { contact } = this.state;
        let name = e.target.name;
        let value = e.target.value;
        let error = ValidateProperty({ name, value }, this.schema);

        let { errors } = this.state;

        errors[name] = error;

        this.setState({ errors: errors });
        contact[name] = value;
        this.setState({ contact: contact });

    }


    onSubmit(e) {
        e.preventDefault();
        let errors = Validate(this.state.request, this.schema);
        this.setState({ errors: errors || {} });
        if (errors) return

    }

    componentDidMount() {
        $('#requestModal-container').click(function (e) {
            $('#requestModal-container').addClass('out');
            $('html').removeClass('modal-active');
        });
        $("#requestModal-container .my-modal").click(function (e) {
            e.stopPropagation();
        });
    }

    render() {
        const { errors } = this.state
        return (
            <div id="requestModal-container" ref={this.props.containerRef} className="">
                <div className="modal-background">
                    <div className="my-modal">
                        <h2>Send a donation request</h2>
                        <textarea placeholder="Message" type="text" name="Message"
                            className="mt-2"
                            style={{ width: "100%", height: "170px" }}
                            value={this.state.request.Message}
                            onChange={this.onChange} />
                        <span className="text-danger text-center">{errors["Message"]}</span>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" style={{ backgroundColor: "#6c757d", borderColor: "#6c757d" }}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

