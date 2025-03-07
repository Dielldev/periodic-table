import React from 'react';
import { ElementCategory } from '../types';
import { getCategoryColor } from '../data/elements';

const ElementLegend: React.FC = () => {
  const categories = [
    { name: 'Alkali Metal', category: ElementCategory.AlkaliMetal },
    { name: 'Alkaline Earth Metal', category: ElementCategory.AlkalineEarthMetal },
    { name: 'Transition Metal', category: ElementCategory.TransitionMetal },
    { name: 'Post-Transition Metal', category: ElementCategory.PostTransitionMetal },
    { name: 'Metalloid', category: ElementCategory.Metalloid },
    { name: 'Nonmetal', category: ElementCategory.Nonmetal },
    { name: 'Halogen', category: ElementCategory.Halogen },
    { name: 'Noble Gas', category: ElementCategory.NobleGas },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-6">
      <h3 className="font-bold mb-2">Element Categories</h3>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {categories.map((item) => (
          <div key={item.category} className="flex items-center">
            <div 
              className={`${getCategoryColor(item.category)} w-4 h-4 mr-1 border border-gray-300`} 
            />
            <span className="text-sm">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElementLegend;