import React from 'react';
import Text from '../atoms/Text';
import User from '../../data/user';

function Footer({ className = "" }) {
    return (
        <footer className={`footer ${className}`}>
            <div className="footer-content">
                <div className="footer-main">
                    <div className="footer-brand">
                        <Text variant="h5" type="title">
                            {User.name}
                        </Text>
                        <Text variant="p" type="body">
                            AmbientDesing
                        </Text>
                    </div>

                    <div className="footer-links">
                        <Text variant="h6" className="footer-title">Navegación</Text>
                        {User.redes.map((red, index) => {
                            return (
                                <a
                                    key={index}
                                    href={red.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-link"
                                >
                                    {red.nombre}
                                </a>
                            );
                        })}
                    </div>

                    <div className="footer-contact">
                        <Text variant="h6" className="footer-title">Contacto</Text>
                        <a href={`mailto:${User.correo}`} className="footer-link">
                            {User.correo}
                        </a>
                    </div>

                </div>
                <hr className="footer-separator" />
                <div className="footer-creditos">
                    <Text variant="small">
                        &copy; {new Date().getFullYear()} {User.nombre}. Todos los derechos reservados.
                    </Text>
                </div>
            </div>
        </footer>
    );
}

export default Footer;