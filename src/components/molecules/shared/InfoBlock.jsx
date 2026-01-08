import React from "react";
import Text from "@/components/atoms/Text";

function InfoBlock({ title, subtitle, description, children, className = "" }) {
    return (
        <div className={`info-block ${className}`}>
            {title && <Text variant="h1" className="mb-2">{title}</Text>}
            {subtitle && <Text variant="h4" className="text-muted mb-4">{subtitle}</Text>}
            
            {description && (
                <Text className="mb-4">
                    {description}
                </Text>
            )}

            {/* Los children permiten inyectar detalles extra como el correo o teléfono */}
            <div className="info-details mt-4">
                {children}
            </div>
        </div>
    );
}

export default InfoBlock;