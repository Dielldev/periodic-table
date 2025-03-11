import React from 'react';
import { Element } from '../types';
import { getCategoryColor } from '../data/elements';

interface ElementCellProps {
  element: Element | null;
  onClick: () => void;
  isRevealed: boolean;
  isCorrect: boolean;
  isIncorrectGuess: boolean;
}

const ElementCell: React.FC<ElementCellProps> = ({ 
  element, 
  onClick, 
  isRevealed, 
  isCorrect, 
  isIncorrectGuess 
}) => {
  if (!element) {
    return <div className="w-16 h-16"></div>;
  }

  // Determine cell styling based on game state
  let cellClasses = "w-16 h-16 border flex flex-col items-center border-black  justify-center text-center transition-all duration-300 cursor-pointer hover:opacity-80";
  
  if (isRevealed) {
    cellClasses += ` ${getCategoryColor(element.category)}`;
  } else if (isCorrect) {
    cellClasses += " bg-green-500 text-white";
  } else if (isIncorrectGuess) {
    cellClasses += " bg-red-500 text-white";
  } else {
    cellClasses += " bg-gray-200 hover:bg-gray-300";
  }
  
  return (
    <div className={cellClasses} onClick={onClick}>
    
      {(isRevealed || isCorrect) && (
        <>
          <div className="font-bold text-sm">{element.symbol}</div>
          <div className="text-[8px] leading-tight mt-0.5">{element.name}</div>
        </>
      )}
    </div>
  );
};

export default ElementCell;