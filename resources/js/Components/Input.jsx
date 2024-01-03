import React, { useEffect, useRef } from "react";
import '../../css/input.css';
import PropTypes from 'prop-types';

Input.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    variant: PropTypes.oneOf(["primary", "primary-outline", "error"]),
    autoComplete: PropTypes.string,
    handleChange: PropTypes.func,
    className: PropTypes.string,
    isFocused: PropTypes.bool,
    isError: PropTypes.bool,
    placeholder: PropTypes.string,
    required: PropTypes.bool
}

export default function Input({
    type = "text",
    name,
    value,
    defaultValue,
    className,
    variant = "primary",
    autoComplete,
    required,
    isFocused,
    handleChange,
    placeholder,
    isError,
}) {

    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    })

    return (
        <div className="flex flex-col item-start">
            <input
                type={type}
                name={name}
                value={value}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError && "input-error"} input-${variant} ${className}`}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
                defaultValue={defaultValue}
            ></input>
        </div>
    )
}