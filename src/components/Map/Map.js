import React from 'react';

export default ({ infosCep }) => {
  return (
    <div className="c-map">
      <h3>{infosCep.logradouro}</h3>
      <p>{infosCep.bairro}</p>
      <p>{infosCep.uf ? `${infosCep.localidade} - ${infosCep.uf}` : infosCep.localidade}</p>
      <p>{infosCep.cep}</p>
      <iframe
        title="GoogleMaps"
        width="600"
        height="450"
        frameBorder="0" 
        style={{border:0}}
        src={`https://www.google.com.br/maps?q=${infosCep.cep},%20Brasil&output=embed`} 
        allowFullScreen
        />
    </div>
  )
}
