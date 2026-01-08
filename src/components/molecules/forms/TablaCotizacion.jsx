import React, { useState } from "react";
import CardCotizacion from "@/components/molecules/cards/CardCotizacion";
import HeaderDinamic from "@/components/molecules/navigation/HeaderDinamic"; 
import cotizacion from "@/services/projects/cotizacion";

function TablaCotizacion() {
    const planesKeys = Object.keys(cotizacion);
    const [planActivo, setPlanActivo] = useState(planesKeys[0]);
    /* Se Transforman los datos de servicio al formato que espera la molécula HeaderDinamic */
    const opcionesHeader = planesKeys.map(key => ({
        id: key,
        label: cotizacion[key].tipo
    }));
    const datosPlan = cotizacion[planActivo];

    return (
        <div className="body-tabla-cotizacion">
            {/* Seccion Header */}
            <HeaderDinamic 
                options={opcionesHeader} 
                activeTab={planActivo} 
                onTabChange={setPlanActivo} 
            />
            <hr />
            
            {/* Seccion CardInformacion */}
            <div className="body-tipo-cotizacion">
                <CardCotizacion 
                    tipo={datosPlan.tipo}
                    esenciales={datosPlan.esencial}
                    agregado={datosPlan.agregado}
                    valor={datosPlan.valor}
                />
            </div>
        </div>
    );
}

export default TablaCotizacion;