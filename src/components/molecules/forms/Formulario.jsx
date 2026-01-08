import React from "react";
import Text from "@/components/atoms/Text";

function FormGroup({ title, children, onSubmit }) {
    return (
        <div className="body-form-group">
            {title && <Text className="title-form-group">{title}</Text>}
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </div>
    );
}

export default FormGroup;