import React from "react";
import cotizacion from "../../data/cotizacion";
import Text from "../atoms/Text";
import { Button } from "bootstrap";

function CardCotizacion() {
    return (
        <div className="body-columna">
            <div className="body-esencial-cotizacion">
                {cotizacion.esencial.map(esencial => (
                    <li key={esencial}>
                        <Text 
                            classname="item-esencial"
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
                            classname="item-agregado"
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

