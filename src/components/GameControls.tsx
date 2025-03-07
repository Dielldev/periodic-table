import React from 'react';
import { GameState } from '../types';

interface GameControlsProps {
  gameState: GameState;
  onGenerateElement: () => void;
  onReset: () => void;
  onChangeDifficulty: (difficulty: 'easy' | 'medium' | 'hard') => void;
}

const GameControls: React.FC<GameControlsProps> = ({
  gameState,
  onGenerateElement,
  onReset,
  onChangeDifficulty
}) => {
  const { currentElement, attempts, maxAttempts, gameOver, guessedCorrectly, score, difficulty } = gameState;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Periodic Table Game</h2>
          <p className="text-gray-600">Test your knowledge of element positions!</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="bg-blue-100 p-2 rounded">
            <span className="font-bold">Score:</span> {score}
          </div>
          <div className="bg-amber-100 p-2 rounded">
            <span className="font-bold">Attempts:</span> {attempts}/{maxAttempts}
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="font-semibold mb-2">Difficulty:</div>
        <div className="flex space-x-2">
          <button 
            className={`px-3 py-1 rounded ${difficulty === 'easy' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            onClick={() => onChangeDifficulty('easy')}
          >
            Easy (5 attempts)
          </button>
          <button 
            className={`px-3 py-1 rounded ${difficulty === 'medium' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
            onClick={() => onChangeDifficulty('medium')}
          >
            Medium (3 attempts)
          </button>
          <button 
            className={`px-3 py-1 rounded ${difficulty === 'hard' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            onClick={() => onChangeDifficulty('hard')}
          >
            Hard (1 attempt)
          </button>
        </div>
      </div>
      
      {currentElement ? (
        <div className="mb-4 p-4 bg-gray-100 rounded">
          <h3 className="text-xl font-bold">{gameOver ? 'Game Over!' : 'Find This Element:'}</h3>
          <div className="text-2xl font-bold text-indigo-600">{currentElement.name}</div>
          
          {gameOver && (
            <div className="mt-2">
              {guessedCorrectly ? (
                <div className="text-green-600 font-semibold">Correct! You found {currentElement.symbol}.</div>
              ) : (
                <div className="text-red-600 font-semibold">
                  You didn't find it. The element was {currentElement.symbol} at position ({currentElement.row}, {currentElement.column}).
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="mb-4 p-4 bg-gray-100 rounded">
          <p>Click "Generate Element" to start the game.</p>
        </div>
      )}
      
      <div className="flex space-x-3">
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
          onClick={onGenerateElement}
          disabled={Boolean(currentElement) && !gameOver}
        >
          {currentElement ? 'New Element' : 'Generate Element'}
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