import React from 'react';
const InputFeedback = ({ error }) =>
    error ? <div className="input-feedback alert alert-danger">{error}</div> : null;

export default InputFeedback;