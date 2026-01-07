import React from "react";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";


function CardCotizacion() {
    const cotizacion = "@/services/projects/cotizacion.js"
    return (
        <div className="body-columna">
            <div className="body-esencial-cotizacion">
                {cotizacion.esencial.map(esencial => (
                    <li key={esencial}>
                        <Text 
                            className="item-esencial"
                            >{esencial}
                        </Text>
                    </li>
                ))}
                {cotizacion.esencial}
            </div>
            <div className="body-agregado-cotizacion">
                {cotizacion.agregado.map(agregado => (
                    <li key={agregado}>
                        <Text 
                            className="item-agregado"
                            >{agregado}
                        </Text>
                    </li>
                    ))}
                {cotizacion.agregado}
            </div>
            <div className="body-valor-cotizacion">
                <Text variant="h2" className="valor-cotizacion">
                    {cotizacion.valor}
                </Text>
            </div>
            <Button>Cotizar {cotizacion.tipo}</Button>
        </div>
    );
}

export default CardCotizacion;
