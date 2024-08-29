import React from "react";

const ButtonCustom = ({
    type = "button",
    onClick,
    bgColor = "bg-blue-400",
    content,
    hoverColor = "hover:bg-blue-700",
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${bgColor} px-5 py-2 mx-3 mt-7 rounded-lg text-white pointer ${hoverColor} focus:bg-purple-500 `}
        >
            {content}
        </button>
    );
};

export default ButtonCustom;
