import React from "react";
import Text from "../atoms/Text";
import CardCotizacion from "../molecules/CardCotizacion";
import cotizacion from "../../data/cotizacion";

function TablaCotizacion(){
    return(
        <div className="body-tipo-cotizacion">
            <Text className="body-titulo-cotizacion" variant="h2">Economico</Text>
            <CardCotizacion 
                esenciales={cotizacion.economico.esencial}
                agregado={cotizacion.economico.agregado}
                valor={cotizacion.economico.valor}
            />
        </div>
    )
}

export default TablaCotizacion