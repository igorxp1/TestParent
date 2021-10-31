import "./styles.css";
import Pessoa from "./Pessoa.js";
export default function App() {
  function metodoPai() {
    console.log("texto do pai");
  }

  return (
    <div className="App">
      <Pessoa metodo={metodoPai} nameIn="igor" nameFin="joao" />
    </div>
  );
}
