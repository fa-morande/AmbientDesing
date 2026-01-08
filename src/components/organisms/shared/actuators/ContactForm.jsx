import React from "react";
import Formulario from "@/components/molecules/forms/Formulario";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

function ContactForm() {
    const handleContactSubmit = (e) => {
        e.preventDefault();
        console.log("Datos de contacto enviados");
    };

    return (
        <div className="body-contact-form">
            <Formulario 
            title="Envíame un mensaje" 
            onSubmit={handleContactSubmit}
            >
                <Input 
                    label="Nombre" 
                    placeholder="Tu nombre" 
                    name="user_name" 
                />
                <Input 
                    label="Email" 
                    type="email" 
                    placeholder="correo@ejemplo.com" 
                    name="user_email" 
                />
                <Input 
                    label="Mensaje" 
                    textarea={true} 
                    placeholder="¿En qué puedo ayudarte?" 
                    name="message" 
                />
                <Button className="w-100" type="submit">
                    Enviar Mensaje
                </Button>
            </Formulario>
        </div>
    );
}

export default ContactForm;