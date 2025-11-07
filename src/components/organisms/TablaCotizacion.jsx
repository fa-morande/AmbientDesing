import React from "react";
import Text from "../atoms/Text";
import CardCotizacion from "../molecules/CardCotizacion";
import cotizacion from "../../data/cotizacion";

function TablaCotizacion(){
    return(
        <div classname="body-tabla-cotizacion">
            <div className="body-tipo-cotizacion">
                <Text className="body-titulo-cotizacion" variant="h2">Economico</Text>
                <CardCotizacion 
                    esenciales={cotizacion.economico.esencial}
                    agregado={cotizacion.economico.agregado}
                    valor={cotizacion.economico.valor}
                />
            </div>
            <div className="body-tipo-cotizacion">
                <Text className="body-titulo-cotizacion" variant="h2">Avanzado</Text>
                <CardCotizacion 
                    esenciales={cotizacion.medio.esencial}
                    agregado={cotizacion.medio.agregado}
                    valor={cotizacion.medio.valor}
                />
            </div>
            <div className="body-tipo-cotizacion">
                <Text className="body-titulo-cotizacion" variant="h2">Premium</Text>
                <CardCotizacion 
                    esenciales={cotizacion.premium.esencial}
                    agregado={cotizacion.premium.agregado}
                    valor={cotizacion.premium.valor}
                />
            </div>
        </div>
        
    )
}

export default TablaCotizacion