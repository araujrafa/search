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
      <h3 className="c-search__title">Consultar</h3>
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
          onClick={props.onSubmit}>Buscar</button>
      </div>
    </div>
  )
}
