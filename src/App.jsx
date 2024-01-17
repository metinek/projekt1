import './css/bootstrap.css';
import './App.css';
import s1 from './img/sluchawki1.png';
import s2 from './img/sluchawki2.png';
import Produkt from "./Produkt.jsx";

const produkty = [
  {id:1, img: s1, nazwa: "Słuchawki przewodowe", lacznosc: "Kabel", mik: "mikrofon przy słuchawce", cena: 159.99, dostawa:"10zł"},
  {id:2, img: s2, nazwa: "Słuchawki bezprzewodowe", lacznosc: "Bluetooth", mik: "mikrofon wbudowany", cena: 249.99, dostawa:"Darmowa dostawa"}
];

function App() {
  return (
    <div className="App">
      <h1>YKom</h1>
      <div className='row'>
        <Produkt parametry={produkty[0]}/>
        <Produkt parametry={produkty[1]}/>
        <Produkt parametry={produkty[0]}/>
        <Produkt parametry={produkty[1]}/>
        <Produkt parametry={produkty[0]}/>
        <Produkt parametry={produkty[1]}/>
      </div>
    </div>
  );
}

export default App;
