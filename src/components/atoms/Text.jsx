import React from "react";

function Text({ children, variant = 'p', className }) {
    const tag = variant; // Puede ser 'h1', 'p', 'span', etc.
    return React.createElement(tag, { className }, children);
}

export default Text;
