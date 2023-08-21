import React from 'react';
import GameState from './GameState';

const GameOver = ({gameState}) => {
    switch (gameState) {
        case GameState.inProgress:
            return <></>;
        case GameState.playerXWins:
            return <div className="game-over">X wins</div>;
        case GameState.playerOWins:
            return <div className="game-over">O wins</div>;
        case GameState.draw:
            return <div className="game-over">Draw</div>

    }
}

export default GameOver
