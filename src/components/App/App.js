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
    }
    this.onChangeCEP = this.onChangeCEP.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const cep = this.state.cep;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(infosCep => this.setState({...this.state, infosCep}))
  }

  onChangeCEP(e) {
    this.setState({
      ...this.cep,
      cep: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Consulta de endereço</h2>
        <Search cep={this.state.cep} onSubmit={this.onSubmit} onChange={this.onChangeCEP}/>
        <Map infosCep={this.state.infosCep}/>
        <Github />
      </div>
    );
  }
}

export default App;
