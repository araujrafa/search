import React from 'react';

export default ({ infosCep }) => {
  const urlIframe = (cep) => `https://www.google.com.br/maps?q=${cep},%20Brasil&output=embed`;

  return (
    <div className="c-map">
      <h3>{infosCep.logradouro}</h3>
      <p>{infosCep.bairro}</p>
      <p>{infosCep.localidade} - {infosCep.uf}</p>
      <p>{infosCep.cep}</p>
      <iframe
        title="GoogleMaps"
        width="600"
        height="450"
        frameborder="0" style={{border:0}}
        src={urlIframe(infosCep.cep)} allowfullscreen>
      </iframe>
    </div>
  )
}
