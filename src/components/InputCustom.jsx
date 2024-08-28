import React from "react";

const InputCustom = ({
    id,
    placeholder,
    content,
    value,
    name,
    type = "text",
    onChange,
    error,
    touched,
}) => {
    return (
        <div className="!ml-0">
            <label htmlFor={id}>{content}</label>
            <input
                id={id}
                name={name}
                className="block mt-2 w-full border-gray-500 border rounded-lg py-3 px-2 focus:ring-blue-500 focus:border-blue-500"
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            {error && touched ? (
                <p className="py-2 text-red-500">{error}</p>
            ) : null}
        </div>
    );
};

export default InputCustom;
