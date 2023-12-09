import PropTypes from "prop-types";
import React from "react";

PrimaryButton.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    className: PropTypes.string,
    processing: PropTypes.bool,
    children: PropTypes.node,
};

export default function PrimaryButton({
    type = "submit",
    variant = "primary",
    className = "",
    processing,
    children,
}) {
    return (
        <button
            type={type}
            className={`rounded-2xl py-[13px] text-center w-full ${
                processing ? "opacity-30" : ""
            } btn-${variant} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}

// export default function PrimaryButton({ className = '', disabled, children, ...props }) {
//     return (
//         <button
//             {...props}
//             className={
//                 `inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
//                     disabled && 'opacity-25'
//                 } ` + className
//             }
//             disabled={disabled}
//         >
//             {children}
//         </button>
//     );
// }