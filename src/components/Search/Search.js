import React from 'react';
import MaskedInput from 'react-maskedinput';

export default props => {
  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      props.onSubmit();
    }
  }

  return (
    <div className="c-search">
      <label>CEP</label>
      <MaskedInput
        type="text"
        mask="11111-111"
        value={props.cep}
        onChange={props.onChange}
        onKeyUp={keyHandler}
      />
      <button onClick={props.onSubmit}>Buscar</button>
    </div>
  )
}
