import React from "react";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import user from "@/services/layouts/user";


function Presentacion({ onBoton }) {
    const { bievenidos, texto } = user.bievenidos;

    return (
        <div className="banner-contenido">
            <Text variant="h1" className="bievenidos-principal">
                {bievenidos}
            </Text>
            
            <Text variant="p" className="descripcion">
                {texto}
            </Text>
            
            <div className="botones-container">
                {/* Botón BLANCO - usa variant="secondary" */}
                <Button 
                    text="Ver Portafolio"
                    variant="primary" 
                    onClick={onBoton}
                />
            </div>
        </div>
    );
}

export default Presentacion;