import React from 'react';
import ElementCell from './ElementCell';
import { createPeriodicTableGrid } from '../data/elements';
import { GameState } from '../types';

interface PeriodicTableProps {
  gameState: GameState;
  onElementClick: (row: number, column: number) => void;
}

const PeriodicTable: React.FC<PeriodicTableProps> = ({ gameState, onElementClick }) => {
  const grid = createPeriodicTableGrid();
  const { currentElement, gameOver, guessedCorrectly, guessedPositions } = gameState;
  
  const isGuessedPosition = (row: number, column: number) => {
    return guessedPositions.some(pos => pos.row === row && pos.column === column);
  };
  
  const isCorrectPosition = (row: number, column: number) => {
    if (!currentElement) return false;
    return row === currentElement.row - 1 && column === currentElement.column - 1;
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
              
              return (
                <ElementCell
                  key={`element-${rowIndex}-${colIndex}`}
                  element={element}
                  isRevealed={isRevealed}
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