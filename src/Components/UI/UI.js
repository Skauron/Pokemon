import React, { Component } from "react";
import './UI.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class UI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            attacks: "",
            power: "00",
            nameAttack: "",
            type: "None",
            feedback: ""
        };
        this.handleClickNotImplementedYet = this.handleClickNotImplementedYet.bind(this);
        this.handleClickFight = this.handleClickFight.bind(this);
        this.handleClickOver = this.handleClickOver.bind(this);
        this.feedback = this.feedback.bind(this);
    }

    //Not implemented yet :( event 
    handleClickNotImplementedYet() {
        alert('This button is not implemented yet! sorry');
    }

    //Change to the attacks menu or attack
    handleClickFight(change) {
        this.setState({ attacks: change });
        if (change === 'attack') {
            this.props.Attack(this.state.power, true);
            this.feedback(true);
            setTimeout(() => {
                var random = Math.floor(Math.random() * (+4 - + 0)) + +0;
                var attack = this.props.OppaimonEnemigo.arAtacks[random]
                console.log(random);
                this.setState({ power: attack.nuAtckPower, nameAttack: attack.stAtckName });
                this.props.Attack(this.state.power, false);
                this.feedback(false);
                setTimeout(() => {
                    this.setState({ attacks: 'menu' });
                }, 3000);
            }, 3000);
        }
    }

    //Method for the attack feedback
    feedback(player) {
        if (player) {
            this.setState({ feedback: this.props.OppaimonAliado.stName + ' used ' + this.state.nameAttack });
            setTimeout(() => {
                if (this.state.nameAttack === 'Tackle') {
                    this.setState({ feedback: "It's not very effective..." });
                } else {
                    this.setState({ feedback: "It's super effective!" });
                }
            }, 1000);
        } else {
            if (this.props.OppaimonEnemigo.nuLife !== 0) {
                this.setState({ feedback: this.props.OppaimonEnemigo.stName + ' used ' + this.state.nameAttack });
                setTimeout(() => {
                    if (this.state.nameAttack === 'Tackle' || this.state.nameAttack === 'Flamethrower') {
                        this.setState({ feedback: "It's not very effective..." });
                    } else {
                        this.setState({ feedback: "It's effective!" });
                    }
                }, 1000);
            }else{
                this.setState({ feedback: this.props.OppaimonAliado.stName + ' won the battle'});
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            }
        }
    }

    //Change the feedback of the attack hovered
    handleClickOver(num, type, name) {
        this.setState({ power: num });
        this.setState({ type: type });
        this.setState({ nameAttack: name });
    }

    render() {
        let chooseCmp = "";
        if (this.state.attacks === "choose") {
            chooseCmp = (
                //#region Attacks
                <div className="row">
                    <div className="col-7">
                        <div className="border" id="largeAtt">
                            <div className="row">
                                <div className="col-6">
                                    <button
                                        type="button"
                                        className="btn btn-link"
                                        id="AttBT"
                                        onMouseOver={() => this.handleClickOver(this.props.OppaimonAliado.arAtacks[0].nuAtckPower, this.props.OppaimonAliado.arAtacks[0].type, this.props.OppaimonAliado.arAtacks[0].stAtckName)}
                                        onClick={() => this.handleClickFight('attack')}>
                                        {this.props.OppaimonAliado.arAtacks[0].stAtckName}
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button
                                        type="button"
                                        className="btn btn-link"
                                        id="AttBT"
                                        onMouseOver={() => this.handleClickOver(this.props.OppaimonAliado.arAtacks[1].nuAtckPower, this.props.OppaimonAliado.arAtacks[1].type, this.props.OppaimonAliado.arAtacks[1].stAtckName)}
                                        onClick={() => this.handleClickFight('attack')}>
                                        {this.props.OppaimonAliado.arAtacks[1].stAtckName}
                                    </button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <button
                                        type="button"
                                        className="btn btn-link"
                                        id="AttBT"
                                        onMouseOver={() => this.handleClickOver(this.props.OppaimonAliado.arAtacks[2].nuAtckPower, this.props.OppaimonAliado.arAtacks[2].type, this.props.OppaimonAliado.arAtacks[2].stAtckName)}
                                        onClick={() => this.handleClickFight('attack')}>
                                        {this.props.OppaimonAliado.arAtacks[2].stAtckName}
                                    </button>
                                </div>
                                <div className="col-6">
                                    <button
                                        type="button"
                                        className="btn btn-link"
                                        id="AttBT"
                                        onMouseOver={() => this.handleClickOver(this.props.OppaimonAliado.arAtacks[3].nuAtckPower, this.props.OppaimonAliado.arAtacks[3].type, this.props.OppaimonAliado.arAtacks[3].stAtckName)}
                                        onClick={() => this.handleClickFight('attack')}>
                                        {this.props.OppaimonAliado.arAtacks[3].stAtckName}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="border" id="small">
                            <div className="row d-flex justify-content-center">
                                <p>Power: {this.state.power}</p>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <p>type/{this.state.type}</p>
                            </div>
                        </div>
                    </div>
                </div>
                // #endregion
            );
        } else if (this.state.attacks === "attack" || this.props.attacks === "attack") {
            chooseCmp = (
                //#region Feedback
                <div className="row">
                    <div className="col-7">
                        <div className="row">
                            <div className="col">
                                <div className="border" id="large">{this.state.feedback}</div>
                            </div>
                        </div>
                    </div>
                </div>
                // #endregion
            );
        } else {
            chooseCmp = (
                // #region Initial menu buttons
                <div className="row">
                    <div className="col">
                        <div className="border" id="large">What will {this.props.OppaimonAliado.stName} do?</div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <button type="button" className="btn btn-danger" id="FightBT" onClick={() => this.handleClickFight('choose')}>Fight!</button>
                            <button type="button" className="btn btn-success" id="BagBT" onClick={this.handleClickNotImplementedYet}>Bag</button>
                        </div>
                        <div className="row">
                            <button type="button" className="btn btn-info" id="OppaimonBT" onClick={this.handleClickNotImplementedYet}>Oppaimon</button>
                            <button type="button" className="btn btn-warning" id="RunBT" onClick={this.handleClickNotImplementedYet}>Run</button>
                        </div>
                    </div>
                </div>
                //#endregion
            );
        }
        return (
            <div className="container fixed-bottom">
                {chooseCmp}
            </div>
        );
    }

}