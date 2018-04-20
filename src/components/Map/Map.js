import React from 'react';
import './Map.css';

export default ({ infosCep, show, isShow }) => {
  const onClose = () => {
    isShow(false);
  }

  return (
    <div className={show ? 'c-map' : 'is-hidden'}>
      <button 
        className="c-map__close"
        title="Fechar"
        onClick={onClose}>
          X
      </button>
      <h3 className="c-search__title">Consultar</h3>
      <h3 className="c-map__title">{infosCep.logradouro}</h3>
      <p className="c-map__info">{infosCep.bairro}</p>
      <p className="c-map__info">{infosCep.uf ? `${infosCep.localidade} - ${infosCep.uf}` : infosCep.localidade}</p>
      <p className="c-map__info">{infosCep.cep}</p>
      <div className="c-map__embed">
        <iframe
          title="GoogleMaps"
          marginWidth="0"
          marginHeight="0" 
          frameBorder="0" 
          scrolling="auto"
          style={{border:0}}
          src={`https://www.google.com.br/maps?q=${infosCep.cep},%20Brasil&output=embed`} 
          allowFullScreen
          />
        </div>
    </div>
  )
}
