import React, { Component } from "react";
import "./Oppaimon.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Oppaimon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UI: "",
      bottomUI: "",
      rightUI: "",
      widthIMG: "",
      HPBarPosX: "",
      HPBarPosY: "",
      Display: "",
      textX: "",
      textY: "",
      rightIMG: "",
      bottomIMG: "",
      lvl: "",
      LvlTextX: "",
      LvlTextY: ""
    };
  }

  componentWillMount() {
    switch (this.props.bando) {
      case "Aliado":
        this.setState({UI: "UI/Info_Base_A.png"});
        this.setState({bottomUI: "150px"});
        this.setState({rightUI: "10px"});
        this.setState({widthIMG: "25%"});
        this.setState({HPBarPosX: "60px"});
        this.setState({HPBarPosY: "220px"});
        this.setState({textX: "439px"});
        this.setState({textY: "230px"});
        this.setState({LvltextX: "100px"});
        this.setState({LvltextY: "230px"});
        this.setState({bottomIMG: "50px"});
        this.setState({rightIMG: "750px"});
        this.setState({lvl: "Lvl 45"});
        break;
      case "Enemigo":
        this.setState({UI: "UI/Info_Base_E.png"});
        this.setState({bottomUI: "460px"});
        this.setState({rightUI: "750px"});
        this.setState({widthIMG: "30%"});
        this.setState({HPBarPosX: "820px"});
        this.setState({HPBarPosY: "530px"});
        this.setState({Display: "none"});
        this.setState({textX: "1170px"});
        this.setState({textY: "535px"});
        this.setState({LvltextX: "800px"});
        this.setState({LvltextY: "535px"});
        this.setState({bottomIMG: "200px"});
        this.setState({rightIMG: "250px"});
        this.setState({lvl: "Lvl 39"});
        break;
        default:
    }
  }

  render() {
    // #region Styles for the elements in the component
    const StyleStats = {
      bottom: this.state.bottomUI,
      right: this.state.rightUI
    };
    const StyleOppaimonIMG = {
      bottom: this.state.bottomIMG,
      right: this.state.rightIMG,
      width: this.state.widthIMG
    };
    const StyleHpBar = {
      right: this.state.HPBarPosX,
      bottom: this.state.HPBarPosY
    };
    const StyleExpBar = {
      Display: this.state.Display,
      bottom: "167px",
      right: "220px",
      width: "22%"
    };
    const StyleTextOppaimon = {
      right: this.state.textX,
      bottom: this.state.textY
    };
    const StyleLvlOppaimon = {
      right: this.state.LvltextX,
      bottom: this.state.LvltextY
    };
    // #endregion

    return (
      <div>
        <img
          src={this.props.img}
          className="Oppaimon rounded float-left"
          style={StyleOppaimonIMG}
          alt={this.props.name}
        />
        <img
          src={this.state.UI}
          className="rounded float Stats"
          style={StyleStats}
          alt="UI"
        />
        <div className="progress MyBar" style={StyleHpBar}>
          <div
            className="progress-bar"
            style={{ width: this.props.hp + "%" }}
            aria-valuenow={this.props.hp}
            aria-valuemin="0"
            aria-valuemax="100"
            role="progressbar"
            id="hp"
          />
        </div>
        <div className="progress MyBar" style={StyleExpBar}>
          <div
            className="progress-bar"
            style={{ width: this.props.exp + "%" }}
            aria-valuenow={this.props.exp}
            aria-valuemin="0"
            aria-valuemax="100"
            role="progressbar"
            id="exp"
          />
        </div>
        <div className="OppaimonText" style={StyleTextOppaimon}>
          <p>{this.props.name}</p>
        </div>
        <div className="OppaimonText" style={StyleTextOppaimon}>
          <p>{this.props.name}</p>
        </div>
        <div className="OppaimonLvl" style={StyleLvlOppaimon}>
          <p>{this.state.lvl}</p>
        </div>
      </div>
    );
  }
}
