import React from 'react';

function App (props) {

  //Função em aero funciont
  const modificarNome = (event) => {
    console.log(event.target.value)
  }

  const criaComboBox = () => {
    const opcoes = ["São Paulo","Rio de Janeiro","Espirito Santo","Minas Gerais"]
    const comboBoxOptcoes = opcoes.map( opcao => <option>{opcao}</option>)

    return(
      <select>
        {comboBoxOptcoes}
      </select>
    )
  }

  const MeuComboBox = () => criaComboBox()

  return( 
    //usando react.fragment como <>
    <>
      <input type="text" value={props.nome} onChange={modificarNome}  className="texto-centralizado" />
  <h1> Hello {props.nome} - {props.idade} - {props.sexo}</h1>
      <MeuComboBox />
    </> 
  )
  
}

export default App;