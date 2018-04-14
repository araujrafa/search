import React from 'react';

export default props => {
  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      props.onSubmit()
    }
  }

  return (
    <div className="c-search">
      <label>CEP</label>
      <input
        type="text"
        value={props.cep}
        onChange={props.onChange}
        onKeyUp={keyHandler}
      />
      <button onClick={props.onSubmit}>Buscar</button>
    </div>
  )
}
