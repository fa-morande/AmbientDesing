import React from 'react';
import Text from '../atoms/Text';

function CardBody({ title, description }) {
    return (
        <div className="card-body">
            <Text variant="h5" className="card-title">{title}</Text>
            <Text variant="p" className="card-description">{description}</Text>
        </div>
    );
}

export default CardBody;
