import React from 'react';
import MaskedInput from 'react-maskedinput';
import './Search.css';

export default props => {  
  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      props.onSubmit();
    }
  }

  return (
    <div className="c-search">
      <div className="c-search__container">
        <label className="c-search__cep">CEP</label>
        <MaskedInput
          mask="11111-111"
          value={props.cep}
          onChange={props.onChange}
          onKeyUp={keyHandler}
          type="text"
        />
        <button 
          className="c-search__button"
          onClick={props.onSubmit}
          title="Buscar">Buscar</button>
      </div>
      <label className={props.error ? 'c-search__error': 'is-hidden'}>Preencha um CEP válido</label>
    </div>
  )
}
