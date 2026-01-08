import React from 'react';
import user from '@/services/layouts/user';
import InfoUser from '@/components/organisms/shared/boxes/InfoUser';
import ContactForm from '@/components/organisms/shared/actuators/ContactForm';

function Contacto() {
    return (
        <div className="contacto-page container py-5">
            <div className="row">
                
                {/* Lado Izquierdo: Organismo de Información */}
                <div className="col-md-5 mb-5">
                    <InfoUser user={user} />
                </div>

                {/* Lado Derecho: Organismo de Formulario */}
                <div className="col-md-7">
                    <ContactForm />
                </div>

            </div>
        </div>
    );
}

export default Contacto;