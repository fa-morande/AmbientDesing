import React from "react";
import Button from "@/components/atoms/Button";

function SocialGroup({ networks, className = "" }) {
    if (!networks) return null;

    return (
        <div className={`redes-container d-flex gap-2 ${className}`}>
            {networks.map((red) => (
                red.url && (
                    <a 
                        key={red.nombre} 
                        href={red.url} 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <Button variant="outline">{red.nombre}</Button>
                    </a>
                )
            ))}
        </div>
    );
}

export default SocialGroup;