import { useState } from "react";
import "./styles.css";

export default function Pessoa(props) {
  const [nome, setNome] = useState(props.nameIn);

  function alteraNome(name) {
    setNome(props.nameFin);
    console.log(name);
  }
  return (
    <div className="App">
      <h2>Nome: {nome}</h2>
      <button onClick={() => alteraNome("dado")}>Muda Nome</button>
      <button onClick={props.metodo}>Chamar Pai</button>
    </div>
  );
}
