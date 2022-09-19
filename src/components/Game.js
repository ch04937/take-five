import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import Gameover from "./Gameover";
import SnakeGame from "./games/SnakeGame";
import TicTacToe from "./games/TicTacToe";
import PlayerCard from "./PlayerCard";

const card = (player, glow) => (
  <div className={glow ? "glow" : "dim"}>
    <PlayerCard data={player} />
  </div>
);
export default function Game() {
  const { game } = useContext(GameContext);
  const boards = {
    tictactoe: <TicTacToe />,
    snakeGame: <SnakeGame />,
  };
  return (
    <section className="game">
      <div className="card">
        <div className="card-header d-flex justify-content-around align-items-center">
          <p>{game.round} </p>
          <h1 className="text-center">{game.gameName?.toUpperCase()} </h1>
          <p>{game.round} </p>
        </div>
        <span>Timer: {(game.lastRenderTime - game.startTime) / 1000}</span>
        {game.gameOver ? <Gameover /> : boards[game.gameName]}
        <footer className="card-footer game-players">
          {card(game.player1, game.turn === "player1")}
          {!game.singlePlayer && card(game.player2, game.turn === "player2")}
        </footer>
      </div>
    </section>
  );
}
