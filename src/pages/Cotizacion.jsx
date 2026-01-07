import React from "react";
import TablaCotizacion from "@/components/molecules/forms/TablaCotizacion";
import Text from "@/components/atoms/Text";

function Cotizacion() {
    return (
        <div className="main-body">
            <div className="components-body-cotizacion">
                <Text variant="h1" className="title-cotizacion">Nuestros Planes</Text>
                <TablaCotizacion />
            </div>
        </div>
    );
}

export default Cotizacion;