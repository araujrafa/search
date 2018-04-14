import React from 'react';

export default props => {
  return (
    <div className="c-map">
      <h3>{props.infosCep.logradouro}</h3>
      <p>{props.infosCep.bairro}</p>
      <p>{props.infosCep.localidade} - {props.infosCep.uf}</p>
      <p>{props.infosCep.cep}</p>
      MAPA
    </div>
  )
}
