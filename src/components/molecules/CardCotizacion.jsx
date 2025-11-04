import React from "react";
import cotizacion from "../../data/cotizacion";
import Text from "../atoms/Text";

function CardCotizacion() {
    return (
        <div className="body-columna">
            <div className="body-esenciales-cotizacion">
                <Text variant="h3" className="esenciales-cotizacion">
                    {cotizacion.esenciales}
                </Text>
                <div className="body-agregado-cotizacion">
                    <Text variant="h2" className="agregado-cotizacion">
                        {cotizacion.agregado}
                    </Text>
                </div>
                <div className="body-valor-cotizacion">
                    <Text variant="h2" className="valor-cotizacion">
                        {cotizacion.valor}
                    </Text>
                </div>
            </div>
        </div>
    );
}

export default CardCotizacion;

