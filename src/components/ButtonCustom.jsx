import React from "react";

const ButtonCustom = ({
    type = "button",
    onClick,
    mt = "mt-7",
    bgColor = "bg-blue-400",
    content,
    hoverColor = "hover:bg-blue-700",
}) => {
    return (
        <>
            <button
                type={type}
                data-tooltip-target="tooltip-light"
                data-tooltip-style="light"
                onClick={onClick}
                className={`${bgColor} px-5 py-2  mx-1 ${mt} rounded-lg text-white pointer ${hoverColor} focus:bg-purple-500 `}
            >
                {content}
            </button>
        </>
    );
};

export default ButtonCustom;
