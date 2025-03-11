import React from 'react';
import { GameState, GameMode } from '../types';

interface GameControlsProps {
  gameState: GameState;
  onGenerateElement: () => void;
  onReset: () => void;
  onChangeDifficulty: (difficulty: 'easy' | 'medium' | 'hard') => void;
  onChangeGameMode: (mode: GameMode) => void;
}

const GameControls: React.FC<GameControlsProps> = ({
  gameState,
  onGenerateElement,
  onReset,
  onChangeDifficulty,
  onChangeGameMode
}) => {
  const { 
    currentElement, 
    attempts, 
    maxAttempts, 
    gameOver, 
    guessedCorrectly, 
    score, 
    difficulty, 
    gameMode,
    collectedElements,
    remainingElements,
    gameCompleted
  } = gameState;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Periodic Table Game</h2>
          <p className="text-gray-600">Find where this element symbol is located by Dielldev</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 p-2 rounded">
            <span className="font-bold">Score:</span> {score}
          </div>
          <div className="bg-amber-100 p-2 rounded">
            <span className="font-bold">Attempts:</span> {attempts}/{maxAttempts}
          </div>
          {gameMode === GameMode.Collection && (
            <div className="bg-green-100 p-2 rounded">
              <span className="font-bold">Collected:</span> {collectedElements.length}/{collectedElements.length + remainingElements.length}
            </div>
          )}
        </div>
      </div>
      
      <div className="mb-4">
        <div className="font-semibold mb-2">Game Mode:</div>
        <div className="flex space-x-2 mb-3">
          <button 
            className={`px-3 py-1 rounded ${gameMode === GameMode.Standard ? 'bg-indigo-500 text-white' : 'bg-gray-200'}`}
            onClick={() => onChangeGameMode(GameMode.Standard)}
            disabled={Boolean(currentElement) && !gameOver}
          >
            Standard Mode
          </button>
          <button 
            className={`px-3 py-1 rounded ${gameMode === GameMode.Collection ? 'bg-purple-500 text-white' : 'bg-gray-200'}`}
            onClick={() => onChangeGameMode(GameMode.Collection)}
            disabled={Boolean(currentElement) && !gameOver}
          >
            Collection Mode
          </button>
        </div>
        
        <div className="font-semibold mb-2">Difficulty:</div>
        <div className="flex space-x-2">
          <button 
            className={`px-3 py-1 rounded ${difficulty === 'easy' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            onClick={() => onChangeDifficulty('easy')}
            disabled={Boolean(currentElement) && !gameOver}
          >
            Easy (5 attempts)
          </button>
          <button 
            className={`px-3 py-1 rounded ${difficulty === 'medium' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
            onClick={() => onChangeDifficulty('medium')}
            disabled={Boolean(currentElement) && !gameOver}
          >
            Medium (3 attempts)
          </button>
          <button 
            className={`px-3 py-1 rounded ${difficulty === 'hard' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            onClick={() => onChangeDifficulty('hard')}
            disabled={Boolean(currentElement) && !gameOver}
          >
            Hard (1 attempt)
          </button>
        </div>
      </div>
      
      {currentElement ? (
        <div className="mb-4 p-4 bg-gray-100 rounded">
          {gameCompleted ? (
            <div>
              <h3 className="text-xl font-bold">Collection Complete!</h3>
              <p className="text-green-600 font-semibold">You've collected all elements in the periodic table!</p>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold">{gameOver ? 'Game Over!' : 'Find This Symbol:'}</h3>
              <div className="text-2xl font-bold text-indigo-600">{currentElement.symbol}</div>
              
              {gameOver && (
                <div className="mt-2">
                  {guessedCorrectly ? (
                    <div className="text-green-600 font-semibold">
                      Correct! You found {currentElement.name}!
                      {gameMode === GameMode.Collection && <div>Element added to your collection!</div>}
                    </div>
                  ) : (
                    <div className="text-red-600 font-semibold">
                      You didn't find it. The element was {currentElement.name} at position ({currentElement.row}, {currentElement.column}).
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      ) : (
        <div className="mb-4 p-4 bg-gray-100 rounded">
          {gameMode === GameMode.Standard ? (
            <p>Click "Generate Element" to start the game.</p>
          ) : (
            <p>Click "Start Collection" to begin collecting elements.</p>
          )}
        </div>
      )}
      
      <div className="flex space-x-3">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
          onClick={onGenerateElement}
          disabled={(Boolean(currentElement) && !gameOver) || gameCompleted}
        >
          {!currentElement 
            ? (gameMode === GameMode.Standard ? 'Generate Element' : 'Start Collection') 
            : gameCompleted 
              ? 'Collection Complete' 
              : 'Next Element'}
        </button>
        
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          onClick={onReset}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default GameControls;