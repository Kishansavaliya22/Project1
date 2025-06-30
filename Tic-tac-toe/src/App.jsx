import { useState } from 'react'
import './App.css'


function Square({value, onSquareClick}){
  return <button className='square' onClick={onSquareClick}>{value}</button>
}

function Board({xIsNext , squares, onplay}){ 
  function handleClick(i){
    if (calculateWinner(squares) || squares[i]){
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onplay(nextSquares)
  }
  
  const winner = calculateWinner(squares);
  let status;
  if(winner){
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O"); 
  }

  return(
    <>
      <div className='status'>{status}</div>
      <div className="box-square">{
        [...new Array(9)].map((item , index) => (
          <Square key={index} value={squares[index]} onSquareClick={() => handleClick(index)} />
        ))
        }</div>
    </>
  )
}


function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 ===0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares){ 
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  
  // function jumpToMove(nextMove) {
  //   setCurrentMove(nextMove);
  // }

  // const moves = history.map((squares, move) => {
  //   let description;
  //   if (move > 0) {
  //     description = 'Go to move #' + move;
  //   } else {
  //     description = 'Go to game start';
  //   }
  //   return (
  //     <li key={move}>
  //       <button >{description}</button>
  //     </li>
  //   ) 
  // })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext = {xIsNext} squares = {currentSquares} onplay = {handlePlay}/>
      </div>
      <div className="game-info">
        You are at move #{currentMove}
        {/* <ol>{moves}</ol> */}
      </div>
    </div>
  )
}

function calculateWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for(let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }



function App() {
  return (
    <>
      <Game />
    </>
  )
}

export default App
