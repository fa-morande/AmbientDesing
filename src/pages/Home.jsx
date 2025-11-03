import React from "react";
import cards from "../data/cards";
import CardBody from "../components/molecules/CardBody";
import Text from "../components/atoms/Text";
import Image from "../components/atoms/Image"

const imgHome = "/img/imgHome.webp"

function Home() {
    return (
        <div className="main-body">
            <div className="components-body">
                <div className="card-body">
                    <CardBody>
                        <div className="card-title-home">
                            <Text 
                                variant="h3" 
                                className="title-card"
                                >{cards.tituloHome}
                            </Text>
                        </div>                            
                        <div className="card-parrafo-home">
                            <Text 
                                variant="p" 
                                className="card-parrafo"
                                >{cards.descripcionHome}
                            </Text>
                        </div>
                    </CardBody>
                </div>
                <div className="image-body">
                    <Image 
                        className="image-home"
                        src={imgHome}
                        alt="vista animada de inicio"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;