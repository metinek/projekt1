import React from "react";
import './Produkt.css';


function Produkt(props) {
    return (
      <div className="Produkt col-sm-6 col-md-4">
        <img className="Obrazek" src={props.parametry.img} alt={props.parametry.nazwa}/>
        <h3>{props.parametry.nazwa}</h3>
        <div className="Specyfikacje">
            <p>Łączność: <span>{props.parametry.lacznosc}</span></p>
            <p>Mikrofon: <span>{props.parametry.mik}</span></p>
            <p>Cena: <span>{props.parametry.cena} zł</span></p>
            <p>Dostawa: <span>{props.parametry.dostawa}</span></p>
        </div>
      </div>
    );


}






export default Produkt;