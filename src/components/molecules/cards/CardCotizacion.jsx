import React from "react";
import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";

function CardCotizacion({ esenciales, agregado, valor, tipo }) {
    /* Manejo de Error */
    if (!esenciales || !agregado) return null;

    return (
        <div className="body-columna">
            
            {/* Seccion Esenciales */}
            <div className="body-esencial-cotizacion">
                <li><Text className="item-esencial">{esenciales.nombre}</Text></li>
                <li><Text className="item-esencial">{esenciales.descripcion}</Text></li>
                <li><Text className="item-esencial">Espacios: {esenciales.espacios}</Text></li>
            </div>
            
            {/* Seccion Agregado */}
            <div className="body-agregado-cotizacion">
                <li><Text className="item-agregado">Asesoría: {agregado.asesoria}</Text></li>
                <li><Text className="item-agregado">Visita: {agregado.visita}</Text></li>
                <li><Text className="item-agregado">Plano 3D: {agregado.plano3D}</Text></li>
            </div>

            {/* Seccion Button */}
            <div className="body-valor-cotizacion">
                <Text variant="h2" className="valor-cotizacion">
                    {valor}
                </Text>
            </div>
            <Button>Cotizar {tipo}</Button>
        </div>
    );
}

export default CardCotizacion;