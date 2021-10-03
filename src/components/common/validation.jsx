import React, { Component } from 'react';
import Joi from 'joi-browser';

export const Validate = (validatedObject, MySchema) => {

    const options = { abortEarly: false };
    const { error } = Joi.validate(validatedObject, MySchema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;

}

export const ValidateProperty = ({ name, value },MySchema) => {
    const obj = { [name]: value };
    const schema = { [name]: MySchema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
}
