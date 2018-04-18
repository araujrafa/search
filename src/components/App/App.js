import React, { Component } from 'react';
import './App.css';

// Components
import Github from '../Github/Github';
import Map from '../Map/Map';
import Search from '../Search/Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cep: '',
      infosCep: [],
      show: false,
      error: false,
    }
    this.isError = this.isError.bind(this);
    this.isShow = this.isShow.bind(this);
    this.onChangeCEP = this.onChangeCEP.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const cep = this.state.cep;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(infosCep => {
        console.log(infosCep)
        if (infosCep.erro) {
          this.setState({...this.state, show: false, error: true })    
        } else {
          this.setState({...this.state, infosCep, error: false})
        }
      })
  }

  onChangeCEP(e) {
    this.setState({
      ...this.state,
      cep: e.target.value
    })
  }

  isShow(flag) {
    this.setState({
      ...this.state,
      show: flag,
    });
  }

  isError(flag) {
    this.setState({
      ...this.state,
      error: flag,
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Consulta de endereço</h2>
        <Search 
          cep={this.state.cep}
          onSubmit={this.onSubmit}
          onChange={this.onChangeCEP}
          isShow={this.isShow}
          isError={this.isError}
          error={this.state.error}
          />
        <Map infosCep={this.state.infosCep} show={this.state.show} isShow={this.isShow}/>
        <Github />
      </div>
    );
  }
}

export default App;
