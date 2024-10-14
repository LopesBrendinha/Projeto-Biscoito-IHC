import React, {Component} from 'react';
import './assets/estilo.css';

import biscoito from './assets/biscoito.png';
import cSharpe from './assets/c#.jfif';
import cPlusPlus from './assets/c++.png';
import flutter  from './assets/flutter-logo.svg';


class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      textoFrase: '',
      imagem:'biscoito',
    }
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    this.frase = [
      'Siga os bons e aprenda com eles.',
      'Não mate o ovidio no primeiro stress, espere o segundo!',
      'Sempre que a Savanna é boa em alguma coisa, existe outra atletica pior.',
      'O ratel é loco',
      'Acredite no ovidio, mas nunca dependa dele para alguma coisa da atletica.',
      'A maior barreira do sucesso é deixar o ovidio fazer coisas na Savanna',
      'Nenhuma cagada é tão grande, que a multa para Savanna não seja pior'
    ]
    this.mostraImg = this.mostraImg.bind(this);
    this.imgs = [
      cSharpe,
      cPlusPlus,
      flutter
    ]
  }
  quebrarBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random()*this.frase.length);
    state.textoFrase = this.frase[numeroAleatorio];
    this.setState(state);
  }
  mostraImg(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random()*this.imgs.length);
    state.imagem = this.imgs[numeroAleatorio];
    this.setState(state);
  }
  
  render(){
    return(
      <div className='container'>
        <img src= {this.state.imagem} class='img'/>
        <Botao acao={this.quebrarBiscoito} nome={"Abrir Biscoito"}/>
        <h3 className='textoFrase'>{this.state.textoFrase}</h3>
        <Botao acao={this.mostraImg} nome={"Mostre Uma imagem"}/>
      </div>
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acao}>{this.props.nome}</button>
      </div>
    );
  }
}


export default App;