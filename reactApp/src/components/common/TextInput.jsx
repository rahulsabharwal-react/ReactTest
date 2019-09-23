import React from 'react';
import classnames from 'classnames';
import { isNullOrUndefined } from 'util';
import InputFeedback from './InputFeedback';
const TextInput = ({ type, name, error, value, onChange, className, required, ...props }) => {
    const wrapperClass = classnames(
        'form-group',
        {
            'has-error': !!(error && error.length > 0)
        },
        className
    );
    const style = {
        width: '100%',
        height: '40px'
    };
    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{props.label}{required? <span className="text-red">*</span>:''}</label>
            <div>
                <input
                    className="form-control"
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    style={style}
                    {...props} />                
            </div>
            <InputFeedback error={error} />
        </div>
    );
};
export default TextInput;