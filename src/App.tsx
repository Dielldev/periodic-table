import React, { useState } from 'react';
import PeriodicTable from './components/PeriodicTable';
import GameControls from './components/GameControls';
import ElementLegend from './components/ElementLegend';
import { GameState, GameMode, Element } from './types';
import { getRandomElement, elements } from './data/elements';

function App() {
  const [gameState, setGameState] = useState<GameState>({
    currentElement: null,
    attempts: 0,
    maxAttempts: 3, // Default to medium difficulty
    gameOver: false,
    guessedCorrectly: false,
    guessedPositions: [],
    score: 0,
    difficulty: 'medium',
    gameMode: GameMode.Standard,
    collectedElements: [],
    remainingElements: [...elements],
    gameCompleted: false
  });

  // Generate a random element for the game
  const handleGenerateElement = () => {
    if (gameState.gameCompleted) {
      return;
    }
    
    let nextElement: Element | null = null;
    
    // Different element selection strategy based on game mode
    if (gameState.gameMode === GameMode.Standard || !gameState.currentElement) {
      // Standard mode: random element each time
      nextElement = getRandomElement();
    } else if (gameState.gameMode === GameMode.Collection) {
      // Collection mode: select from remaining elements
      if (gameState.remainingElements.length === 0) {
        // No more elements, game is complete
        setGameState({
          ...gameState,
          gameCompleted: true,
          gameOver: true
        });
        return;
      }
      
      // Select a random element from the remaining elements
      const randomIndex = Math.floor(Math.random() * gameState.remainingElements.length);
      nextElement = gameState.remainingElements[randomIndex];
    }

    setGameState({
      ...gameState,
      currentElement: nextElement,
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
      difficulty: gameState.difficulty,
      gameMode: gameState.gameMode,
      collectedElements: [],
      remainingElements: [...elements],
      gameCompleted: false
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
      let newCollectedElements = [...gameState.collectedElements];
      let newRemainingElements = [...gameState.remainingElements];
      
      // In collection mode, update collected and remaining elements
      if (gameState.gameMode === GameMode.Collection && gameState.currentElement) {
        newCollectedElements.push(gameState.currentElement);
        newRemainingElements = newRemainingElements.filter(
          el => el.atomicNumber !== gameState.currentElement!.atomicNumber
        );
      }
      
      setGameState({
        ...gameState,
        attempts: newAttempts,
        gameOver: true,
        guessedCorrectly: true,
        guessedPositions: newGuessedPositions,
        score: gameState.score + calculateScore(),
        collectedElements: newCollectedElements,
        remainingElements: newRemainingElements
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
    
    // Score boost for collection mode
    const modeMultiplier = gameState.gameMode === GameMode.Collection ? 1.2 : 1;
    
    switch (gameState.difficulty) {
      case 'easy':
        return Math.round(baseScore * attemptMultiplier * 0.6 * modeMultiplier);
      case 'medium':
        return Math.round(baseScore * attemptMultiplier * modeMultiplier);
      case 'hard':
        return Math.round(baseScore * attemptMultiplier * 2 * modeMultiplier);
      default:
        return Math.round(baseScore * attemptMultiplier * modeMultiplier);
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
  
  // Change game mode
  const handleChangeGameMode = (mode: GameMode) => {
    setGameState({
      ...gameState,
      gameMode: mode,
      collectedElements: [],
      remainingElements: [...elements],
      gameCompleted: false,
      currentElement: null,
      gameOver: false,
      score: 0
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
          onChangeGameMode={handleChangeGameMode}
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
