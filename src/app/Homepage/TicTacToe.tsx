"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export default function TicTacToe() {
  const [board, setBoard] = useState<string[]>(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [isComputerThinking, setIsComputerThinking] = useState(false);

  const calculateWinner = (squares: string[]): string | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const findBestMove = (board: string[]): number => {
    const winner = calculateWinner(board);
    if (winner) return -1;

    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        const newBoard = board.slice();
        newBoard[i] = "O";
        if (calculateWinner(newBoard) === "O") return i;
      }
    }

    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        const newBoard = board.slice();
        newBoard[i] = "X";
        if (calculateWinner(newBoard) === "X") return i;
      }
    }

    if (!board[4]) return 4;

    const corners = [0, 2, 6, 8];
    const availableCorners = corners.filter((i) => !board[i]);
    if (availableCorners.length > 0) {
      return availableCorners[Math.floor(Math.random() * availableCorners.length)];
    }

    const availableMoves = board
      .map((sq, i) => (sq === null ? i : null))
      .filter((i) => i !== null) as number[];
    if (availableMoves.length > 0) {
      return availableMoves[Math.floor(Math.random() * availableMoves.length)];
    }

    return -1;
  };

  const winner = calculateWinner(board);

  const handlePlayerClick = (i: number) => {
    if (winner || board[i] || !isPlayerTurn || isComputerThinking) return;

    const newBoard = board.slice();
    newBoard[i] = "X";
    setBoard(newBoard);
    setIsPlayerTurn(false);
  };

  useEffect(() => {
    if (!isPlayerTurn && !winner) {
      setIsComputerThinking(true);
      const timeout = setTimeout(() => {
        const computerMove = findBestMove(board);
        if (computerMove !== -1) {
          const newBoard = board.slice();
          newBoard[computerMove] = "O";
          setBoard(newBoard);
        }
        setIsPlayerTurn(true);
        setIsComputerThinking(false);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [isPlayerTurn, board, winner]);

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setIsComputerThinking(false);
  };

  const renderSquare = (i: number) => (
    <button
      onClick={() => handlePlayerClick(i)}
      disabled={isComputerThinking}
      className="focus:ring-opacity-50 flex h-20 w-20 items-center justify-center rounded-lg bg-gray-200 text-4xl font-bold transition-all duration-300 hover:bg-gray-300 focus:ring-4 focus:ring-accent focus:outline-none disabled:cursor-not-allowed md:h-24 md:w-24 dark:bg-gray-700 dark:hover:bg-gray-600"
      aria-label={`Square ${i + 1}`}
    >
      {board[i] === "X" && <span className="text-rose-500">{board[i]}</span>}
      {board[i] === "O" && <span className="text-yellow-400">{board[i]}</span>}
    </button>
  );

  let status;
  if (winner) {
    status = winner === "X" ? "You Win! 🎉" : "Computer Wins! 🤖";
  } else if (board.every(Boolean)) {
    status = "It's a draw!";
  } else {
    status = isPlayerTurn ? "Your Turn" : "Computer is thinking...";
  }

  return (
    <div className="mx-auto flex max-w-sm flex-col items-center rounded-2xl bg-card p-6 shadow-inner">
      <div className="mb-4 grid grid-cols-3 gap-2">
        {Array(9)
          .fill(null)
          .map((_, i) => (
            <div key={i}>{renderSquare(i)}</div>
          ))}
      </div>
      <div className="text-center">
        <p className="mb-4 h-7 text-xl font-medium text-card-foreground">{status}</p>
        <Button
          onClick={handleReset}
          className="transform rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-2 text-white shadow-lg transition-transform duration-300 hover:scale-105"
        >
          Play Again
        </Button>
      </div>
    </div>
  );
}
