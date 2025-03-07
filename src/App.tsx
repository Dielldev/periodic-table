import React, { useState } from 'react';
import PeriodicTable from './components/PeriodicTable';
import GameControls from './components/GameControls';
import ElementLegend from './components/ElementLegend';
import { GameState } from './types';
import { getRandomElement } from './data/elements';

function App() {
  const [gameState, setGameState] = useState<GameState>({
    currentElement: null,
    attempts: 0,
    maxAttempts: 3, // Default to medium difficulty
    gameOver: false,
    guessedCorrectly: false,
    guessedPositions: [],
    score: 0,
    difficulty: 'medium'
  });

  // Generate a random element for the game
  const handleGenerateElement = () => {
    const element = getRandomElement();
    setGameState({
      ...gameState,
      currentElement: element,
      attempts: 0,
      gameOver: false,
      guessedCorrectly: false,
      guessedPositions: []
    });
  };

  // Reset the game completely
  const handleReset = () => {
    setGameState({
      currentElement: null,
      attempts: 0,
      maxAttempts: gameState.maxAttempts,
      gameOver: false,
      guessedCorrectly: false,
      guessedPositions: [],
      score: 0,
      difficulty: gameState.difficulty
    });
  };

  // Handle click on an element cell
  const handleElementClick = (row: number, column: number) => {
    if (!gameState.currentElement || gameState.gameOver) return;
    
    // Check if position has already been guessed
    if (gameState.guessedPositions.some(pos => pos.row === row && pos.column === column)) {
      return; // Already guessed this position
    }
    
    const isCorrect = 
      row === gameState.currentElement.row - 1 && 
      column === gameState.currentElement.column - 1;
    
    const newAttempts = gameState.attempts + 1;
    const newGuessedPositions = [...gameState.guessedPositions, { row, column }];
    
    // Update game state based on the guess
    if (isCorrect) {
      // Correct guess
      setGameState({
        ...gameState,
        attempts: newAttempts,
        gameOver: true,
        guessedCorrectly: true,
        guessedPositions: newGuessedPositions,
        score: gameState.score + calculateScore()
      });
    } else if (newAttempts >= gameState.maxAttempts) {
      // Out of attempts
      setGameState({
        ...gameState,
        attempts: newAttempts,
        gameOver: true,
        guessedCorrectly: false,
        guessedPositions: newGuessedPositions
      });
    } else {
      // Wrong guess but still have attempts left
      setGameState({
        ...gameState,
        attempts: newAttempts,
        guessedPositions: newGuessedPositions
      });
    }
  };

  // Calculate score based on attempts and difficulty
  const calculateScore = () => {
    const baseScore = 100;
    const attemptMultiplier = gameState.maxAttempts - gameState.attempts + 1;
    
    switch (gameState.difficulty) {
      case 'easy':
        return baseScore * attemptMultiplier * 0.6;
      case 'medium':
        return baseScore * attemptMultiplier;
      case 'hard':
        return baseScore * attemptMultiplier * 2;
      default:
        return baseScore * attemptMultiplier;
    }
  };

  // Change difficulty level
  const handleChangeDifficulty = (difficulty: 'easy' | 'medium' | 'hard') => {
    const maxAttempts = difficulty === 'easy' ? 5 : difficulty === 'medium' ? 3 : 1;
    
    setGameState({
      ...gameState,
      difficulty,
      maxAttempts
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <GameControls 
          gameState={gameState} 
          onGenerateElement={handleGenerateElement} 
          onReset={handleReset}
          onChangeDifficulty={handleChangeDifficulty}
        />
        
        <PeriodicTable 
          gameState={gameState}
          onElementClick={handleElementClick}
        />
        
        <ElementLegend />
        
        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>Educational Periodic Table Game | Made by Diell Govori for Students to Practice</p>
        </div>
      </div>
    </div>
  );
}

export default App;
