import React from "react";
import cards from "../data/cards";
import CardBody from "../components/molecules/CardBody";
import Text from "../components/atoms/Text";


function Home() {
  return (
      <CardBody>
        <Text variant="h3" className="title-card">{cards.tituloHome}</Text>
        <Text variant="p" className="Parrafo-card">{cards.descripcionHome}</Text>
      </CardBody>
      
  );
}

export default Home;