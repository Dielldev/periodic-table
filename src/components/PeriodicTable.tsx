import React from 'react';
import ElementCell from './ElementCell';
import { createPeriodicTableGrid } from '../data/elements';
import { GameState, GameMode } from '../types';

interface PeriodicTableProps {
  gameState: GameState;
  onElementClick: (row: number, column: number) => void;
}

const PeriodicTable: React.FC<PeriodicTableProps> = ({ gameState, onElementClick }) => {
  const grid = createPeriodicTableGrid();
  const { 
    currentElement, 
    gameOver, 
    guessedPositions,
    gameMode,
    collectedElements 
  } = gameState;
  
  const isGuessedPosition = (row: number, column: number) => {
    return guessedPositions.some(pos => pos.row === row && pos.column === column);
  };
  
  const isCorrectPosition = (row: number, column: number) => {
    if (!currentElement) return false;
    return row === currentElement.row - 1 && column === currentElement.column - 1;
  };

  const isCollectedElement = (row: number, column: number) => {
    const element = grid[row][column];
    if (!element) return false;
    return collectedElements.some(el => el.atomicNumber === element.atomicNumber);
  };

  return (
    <div className="overflow-x-auto">
      <div className="periodic-table min-w-fit">
        {grid.map((row, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex">
            {row.map((element, colIndex) => {
              const isRevealed = gameOver && element !== null;
              const isCorrect = gameOver && isCorrectPosition(rowIndex, colIndex);
              const isIncorrectGuess = !isCorrect && isGuessedPosition(rowIndex, colIndex);
              const isCollected = gameMode === GameMode.Collection && isCollectedElement(rowIndex, colIndex);
              
              return (
                <ElementCell
                  key={`element-${rowIndex}-${colIndex}`}
                  element={element}
                  isRevealed={isRevealed || isCollected}
                  isCorrect={isCorrect}
                  isIncorrectGuess={isIncorrectGuess}
                  onClick={() => element && onElementClick(rowIndex, colIndex)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeriodicTable;