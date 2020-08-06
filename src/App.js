import React, {Component} from 'react';
import PlayerCard from './PlayerCard';
class Game extends Component {
    constructor(){
        super();
        this.signs =["rock", "scissors","paper"]
        this.state = {
            playerOne: "rock",
            playerTwo: "scissors",
        }
    }
    playGame = () => {
        this.setState({
            playerOne: this.signs[Math.floor(Math.random() * 3)],
            playerTwo: this.signs[Math.floor(Math.random() * 3)],
        })
    }
    decideWinner = () => {
        const playerOne = this.state.playerOne
        const playerTwo = this.state.playerTwo
        
        if (playerOne === playerTwo) {
            return "It's a Tie! "
        }
        else if ((playerOne === "rock" && playerTwo === "scissors") || 
          (playerOne === "paper"  && playerTwo === "rock")||
          (playerOne === "scissors" && playerTwo === "paper")) {
              return "Player 1 Wins!"
          } else {
              return "Player 2 Wins!"
          }

    }

    render() {
        return (
            <div className="style">
            <div>
                  <p>Player One</p>  <PlayerCard sign={this.state.playerOne}/>
                  <p>Player Two</p> <PlayerCard sign={"Playe two",this.state.playerTwo}/>
            </div>
             <div className="winner">{this.decideWinner()}</div>
             <button type="button" onClick={this.playGame}> Play the Game</button>
             </div>
        );
    }
}

export default Game;
