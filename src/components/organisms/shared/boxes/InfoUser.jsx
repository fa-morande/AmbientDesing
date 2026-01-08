// src/components/organisms/shared/UserInfo.jsx
import React from "react";
import InfoBlock from "@/components/molecules/shared/InfoBlock";
import SocialGroup from "@/components/molecules/shared/SocialGroup";
import Text from "@/components/atoms/Text";

function UserInfo({ user, showSocial = true }) {
    if (!user) return null;

    return (
        <div className="user-info-organism">
            <InfoBlock 
                title={user.nombre}
                subtitle={user.tituloprincipal}
                description={user.descripcion}
            >
                {/* Inyectamos los detalles específicos como hijos */}
                <Text><strong>Correo:</strong> {user.correo}</Text>
                <Text><strong>Teléfono:</strong> {user.numero}</Text>
            </InfoBlock>

            {showSocial && (
                <SocialGroup networks={user.redes} className="mt-4" />
            )}
        </div>
    );
}

export default UserInfo;