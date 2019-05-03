import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UI from "./Components/UI/UI";
import Oppaimon from "./Components/Oppaimon/Oppaimon";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OppaimonAliado: {},
      OppaimonEnemigo: {}
    };
    this.Attack = this.Attack.bind(this);
  }

  //Method run before the render
  componentWillMount() {
    axios
      .get("http://www.mocky.io/v2/5cca03093100000f3212ce51")
      .then(response =>
        this.setState({
          OppaimonAliado: response.data[1],
          OppaimonEnemigo: response.data[0]
        })
      );
  }

  //Method run before a component update
  componentDidUpdate() {
    if (this.state.OppaimonEnemigo.nuLife == 0) {
      console.log("Yey ganaste perra");
    }
  }

  //Attack method
  Attack(power, player) {
    if (player === true) {
      var Oppaiaux = this.state.OppaimonEnemigo;
      var daño = (power * 2) - Oppaiaux.nuDf;
      if (daño <= 0) {
        daño = 10;
      }
      Oppaiaux.nuLife = Oppaiaux.nuLife - daño;
      if (Oppaiaux.nuLife <= 0) {
        Oppaiaux.nuLife = 0;
      }
      this.setState({ OppaimonEnemigo: Oppaiaux });
    } else {
      if (this.state.OppaimonEnemigo.nuLife !== 0) {
        var Oppaiaux = this.state.OppaimonAliado;
        var daño = (power) - Oppaiaux.nuDf;
        if (daño <= 0) {
          daño = 10;
        }
        Oppaiaux.nuLife = Oppaiaux.nuLife - daño;
        if (Oppaiaux.nuLife <= 0) {
          Oppaiaux.nuLife = 0;
        }
        this.setState({ OppaimonAliado: Oppaiaux });
      }
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UI
            OppaimonAliado={this.state.OppaimonAliado}
            OppaimonEnemigo={this.state.OppaimonEnemigo}
            Attack={this.Attack}
          />
          <Oppaimon
            hp={this.state.OppaimonEnemigo.nuLife}
            name={this.state.OppaimonEnemigo.stName}
            bando="Enemigo"
            img={this.state.OppaimonEnemigo.urlImg}
          />
          <Oppaimon
            hp={this.state.OppaimonAliado.nuLife}
            name={this.state.OppaimonAliado.stName}
            bando="Aliado"
            img={this.state.OppaimonAliado.urlImg}
          />
        </header>
      </div>
    );
  }
}

export default App;
