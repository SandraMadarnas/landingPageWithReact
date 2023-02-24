import React from "react";
import NavBar from "./component/NavBar.jsx";
import Welcome from "./component/Welcome.jsx";
import Card from "./component/Card.jsx";
import { cards } from "./component/cardsObject.jsx";
import Footer from "./component/Footer.jsx";


const cardsHTML = cards.map(
	(carta,i) => { 
		return <Card CardImage={carta.CardImage} CardTitle={carta.CardTitle} CardDescription={carta.CardDescription} CardRefButton={carta.CardRefButton} key={i} /> 
	}
);


const Home = () => {
  return (
    <React.Fragment>
      {/* Esto es igual a <></> */}
      <NavBar />
      <div className="container">
        <Welcome />
        <div className="row p-0">
          {cardsHTML}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;