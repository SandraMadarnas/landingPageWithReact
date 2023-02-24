import React from "react";
import NavBar from "./component/NavBar.jsx";
import Welcome from "./component/Welcome.jsx";
import Card from "./component/Card.jsx";
import { cards } from "./component/CardsObject.jsx";
import Footer from "./component/Footer.jsx";


const cardsHTML = cards.map(
	(carta,i) => { 
		return <Card CardTitle={carta.CardTitle} CardImage={carta.CardImage} CardDescription={carta.CardDescription} key={i} /> 
	}
);


const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Welcome />
        <div className="row p-0">
          {cardsHTML}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
