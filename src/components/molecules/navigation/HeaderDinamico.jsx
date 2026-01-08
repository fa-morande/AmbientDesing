import React from "react";
import Text from "@/components/atoms/Text";

function HeaderDinamico({ options, onTabChange }) {
    return (
        <div className="tab-header-container" style={{ display: 'flex', gap: '20px' }}>
            {options.map((option) => (
                <Text 
                    key={option.id}
                    className="headerDinamico"
                    variant="h2" 
                    onClick={() => onTabChange(option.id)}
                >
                    {option.label}
                </Text>
            ))}
        </div>
    );
}

export default HeaderDinamico;