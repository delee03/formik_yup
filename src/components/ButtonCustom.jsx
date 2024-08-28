import React from "react";

const ButtonCustom = ({
    type = "button",
    onClick,
    bgColor = "bg-blue-400",
    content,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${bgColor} px-5 py-2 mx-3 mt-7 rounded-lg text-white pointer`}
        >
            {content}
        </button>
    );
};

export default ButtonCustom;
