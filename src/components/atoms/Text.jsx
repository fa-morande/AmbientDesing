import React from "react";

function Text({ children, variant = "p", className = "", onClick, style }) {
    const Component = variant; // h1, h2, p, etc.
    return (
        <Component 
            className={className} 
            onClick={onClick}
            style={style}
        >
            {children}
        </Component>
    );
}

export default Text;