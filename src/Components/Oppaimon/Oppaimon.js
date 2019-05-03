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
        this.state.UI = "UI/Info_Base_A.png";
        this.state.bottomUI = "150px";
        this.state.rightUI = "10px";
        this.state.widthIMG = "25%";
        this.state.HPBarPosX = "60px";
        this.state.HPBarPosY = "220px";
        this.state.textX = "439px";
        this.state.textY = "230px";
        this.state.LvltextX = "100px";
        this.state.LvltextY = "230px";
        this.state.bottomIMG = "50px";
        this.state.rightIMG = "750px";
        this.state.lvl = "Lvl 45";
        break;
      case "Enemigo":
        this.state.UI = "UI/Info_Base_E.png";
        this.state.bottomUI = "460px";
        this.state.rightUI = "750px";
        this.state.widthIMG = "30%";
        this.state.HPBarPosX = "820px";
        this.state.HPBarPosY = "530px";
        this.state.Display = "none";
        this.state.textX = "1170px";
        this.state.textY = "535px";
        this.state.LvltextX = "800px";
        this.state.LvltextY = "535px";
        this.state.bottomIMG = "200px";
        this.state.rightIMG = "250px";
        this.state.lvl = "Lvl 39";
        break;
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
