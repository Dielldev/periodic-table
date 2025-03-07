import { Element, ElementCategory } from '../types';

export const elements: Element[] = [
  // Row 1
  { symbol: 'H', name: 'Hydrogen', atomicNumber: 1, row: 1, column: 1, category: ElementCategory.Nonmetal },
  { symbol: 'He', name: 'Helium', atomicNumber: 2, row: 1, column: 18, category: ElementCategory.NobleGas },
  
  // Row 2
  { symbol: 'Li', name: 'Lithium', atomicNumber: 3, row: 2, column: 1, category: ElementCategory.AlkaliMetal },
  { symbol: 'Be', name: 'Beryllium', atomicNumber: 4, row: 2, column: 2, category: ElementCategory.AlkalineEarthMetal },
  { symbol: 'B', name: 'Boron', atomicNumber: 5, row: 2, column: 13, category: ElementCategory.Metalloid },
  { symbol: 'C', name: 'Carbon', atomicNumber: 6, row: 2, column: 14, category: ElementCategory.Nonmetal },
  { symbol: 'N', name: 'Nitrogen', atomicNumber: 7, row: 2, column: 15, category: ElementCategory.Nonmetal },
  { symbol: 'O', name: 'Oxygen', atomicNumber: 8, row: 2, column: 16, category: ElementCategory.Nonmetal },
  { symbol: 'F', name: 'Fluorine', atomicNumber: 9, row: 2, column: 17, category: ElementCategory.Halogen },
  { symbol: 'Ne', name: 'Neon', atomicNumber: 10, row: 2, column: 18, category: ElementCategory.NobleGas },
  
  // Row 3
  { symbol: 'Na', name: 'Sodium', atomicNumber: 11, row: 3, column: 1, category: ElementCategory.AlkaliMetal },
  { symbol: 'Mg', name: 'Magnesium', atomicNumber: 12, row: 3, column: 2, category: ElementCategory.AlkalineEarthMetal },
  { symbol: 'Al', name: 'Aluminum', atomicNumber: 13, row: 3, column: 13, category: ElementCategory.PostTransitionMetal },
  { symbol: 'Si', name: 'Silicon', atomicNumber: 14, row: 3, column: 14, category: ElementCategory.Metalloid },
  { symbol: 'P', name: 'Phosphorus', atomicNumber: 15, row: 3, column: 15, category: ElementCategory.Nonmetal },
  { symbol: 'S', name: 'Sulfur', atomicNumber: 16, row: 3, column: 16, category: ElementCategory.Nonmetal },
  { symbol: 'Cl', name: 'Chlorine', atomicNumber: 17, row: 3, column: 17, category: ElementCategory.Halogen },
  { symbol: 'Ar', name: 'Argon', atomicNumber: 18, row: 3, column: 18, category: ElementCategory.NobleGas },
  
  // Row 4
  { symbol: 'K', name: 'Potassium', atomicNumber: 19, row: 4, column: 1, category: ElementCategory.AlkaliMetal },
  { symbol: 'Ca', name: 'Calcium', atomicNumber: 20, row: 4, column: 2, category: ElementCategory.AlkalineEarthMetal },
  { symbol: 'Sc', name: 'Scandium', atomicNumber: 21, row: 4, column: 3, category: ElementCategory.TransitionMetal },
  { symbol: 'Ti', name: 'Titanium', atomicNumber: 22, row: 4, column: 4, category: ElementCategory.TransitionMetal },
  { symbol: 'V', name: 'Vanadium', atomicNumber: 23, row: 4, column: 5, category: ElementCategory.TransitionMetal },
  { symbol: 'Cr', name: 'Chromium', atomicNumber: 24, row: 4, column: 6, category: ElementCategory.TransitionMetal },
  { symbol: 'Mn', name: 'Manganese', atomicNumber: 25, row: 4, column: 7, category: ElementCategory.TransitionMetal },
  { symbol: 'Fe', name: 'Iron', atomicNumber: 26, row: 4, column: 8, category: ElementCategory.TransitionMetal },
  { symbol: 'Co', name: 'Cobalt', atomicNumber: 27, row: 4, column: 9, category: ElementCategory.TransitionMetal },
  { symbol: 'Ni', name: 'Nickel', atomicNumber: 28, row: 4, column: 10, category: ElementCategory.TransitionMetal },
  { symbol: 'Cu', name: 'Copper', atomicNumber: 29, row: 4, column: 11, category: ElementCategory.TransitionMetal },
  { symbol: 'Zn', name: 'Zinc', atomicNumber: 30, row: 4, column: 12, category: ElementCategory.TransitionMetal },
  { symbol: 'Ga', name: 'Gallium', atomicNumber: 31, row: 4, column: 13, category: ElementCategory.PostTransitionMetal },
  { symbol: 'Ge', name: 'Germanium', atomicNumber: 32, row: 4, column: 14, category: ElementCategory.Metalloid },
  { symbol: 'As', name: 'Arsenic', atomicNumber: 33, row: 4, column: 15, category: ElementCategory.Metalloid },
  { symbol: 'Se', name: 'Selenium', atomicNumber: 34, row: 4, column: 16, category: ElementCategory.Nonmetal },
  { symbol: 'Br', name: 'Bromine', atomicNumber: 35, row: 4, column: 17, category: ElementCategory.Halogen },
  { symbol: 'Kr', name: 'Krypton', atomicNumber: 36, row: 4, column: 18, category: ElementCategory.NobleGas },

  // Row 5
  { symbol: 'Rb', name: 'Rubidium', atomicNumber: 37, row: 5, column: 1, category: ElementCategory.AlkaliMetal },
  { symbol: 'Sr', name: 'Strontium', atomicNumber: 38, row: 5, column: 2, category: ElementCategory.AlkalineEarthMetal },
  { symbol: 'Y', name: 'Yttrium', atomicNumber: 39, row: 5, column: 3, category: ElementCategory.TransitionMetal },
  { symbol: 'Zr', name: 'Zirconium', atomicNumber: 40, row: 5, column: 4, category: ElementCategory.TransitionMetal },
  { symbol: 'Nb', name: 'Niobium', atomicNumber: 41, row: 5, column: 5, category: ElementCategory.TransitionMetal },
  { symbol: 'Mo', name: 'Molybdenum', atomicNumber: 42, row: 5, column: 6, category: ElementCategory.TransitionMetal },
  { symbol: 'Tc', name: 'Technetium', atomicNumber: 43, row: 5, column: 7, category: ElementCategory.TransitionMetal },
  { symbol: 'Ru', name: 'Ruthenium', atomicNumber: 44, row: 5, column: 8, category: ElementCategory.TransitionMetal },
  { symbol: 'Rh', name: 'Rhodium', atomicNumber: 45, row: 5, column: 9, category: ElementCategory.TransitionMetal },
  { symbol: 'Pd', name: 'Palladium', atomicNumber: 46, row: 5, column: 10, category: ElementCategory.TransitionMetal },
  { symbol: 'Ag', name: 'Silver', atomicNumber: 47, row: 5, column: 11, category: ElementCategory.TransitionMetal },
  { symbol: 'Cd', name: 'Cadmium', atomicNumber: 48, row: 5, column: 12, category: ElementCategory.TransitionMetal },
  { symbol: 'In', name: 'Indium', atomicNumber: 49, row: 5, column: 13, category: ElementCategory.PostTransitionMetal },
  { symbol: 'Sn', name: 'Tin', atomicNumber: 50, row: 5, column: 14, category: ElementCategory.PostTransitionMetal },
  { symbol: 'Sb', name: 'Antimony', atomicNumber: 51, row: 5, column: 15, category: ElementCategory.Metalloid },
  { symbol: 'Te', name: 'Tellurium', atomicNumber: 52, row: 5, column: 16, category: ElementCategory.Metalloid },
  { symbol: 'I', name: 'Iodine', atomicNumber: 53, row: 5, column: 17, category: ElementCategory.Halogen },
  { symbol: 'Xe', name: 'Xenon', atomicNumber: 54, row: 5, column: 18, category: ElementCategory.NobleGas },

  // Row 6
  { symbol: 'Cs', name: 'Cesium', atomicNumber: 55, row: 6, column: 1, category: ElementCategory.AlkaliMetal },
  { symbol: 'Ba', name: 'Barium', atomicNumber: 56, row: 6, column: 2, category: ElementCategory.AlkalineEarthMetal },
  { symbol: 'La', name: 'Lanthanum', atomicNumber: 57, row: 6, column: 3, category: ElementCategory.Lanthanide },
  { symbol: 'Hf', name: 'Hafnium', atomicNumber: 72, row: 6, column: 4, category: ElementCategory.TransitionMetal },
  { symbol: 'Ta', name: 'Tantalum', atomicNumber: 73, row: 6, column: 5, category: ElementCategory.TransitionMetal },
  { symbol: 'W', name: 'Tungsten', atomicNumber: 74, row: 6, column: 6, category: ElementCategory.TransitionMetal },
  { symbol: 'Re', name: 'Rhenium', atomicNumber: 75, row: 6, column: 7, category: ElementCategory.TransitionMetal },
  { symbol: 'Os', name: 'Osmium', atomicNumber: 76, row: 6, column: 8, category: ElementCategory.TransitionMetal },
  { symbol: 'Ir', name: 'Iridium', atomicNumber: 77, row: 6, column: 9, category: ElementCategory.TransitionMetal },
  { symbol: 'Pt', name: 'Platinum', atomicNumber: 78, row: 6, column: 10, category: ElementCategory.TransitionMetal },
  { symbol: 'Au', name: 'Gold', atomicNumber: 79, row: 6, column: 11, category: ElementCategory.TransitionMetal },
  { symbol: 'Hg', name: 'Mercury', atomicNumber: 80, row: 6, column: 12, category: ElementCategory.TransitionMetal },
  { symbol: 'Tl', name: 'Thallium', atomicNumber: 81, row: 6, column: 13, category: ElementCategory.PostTransitionMetal },
  { symbol: 'Pb', name: 'Lead', atomicNumber: 82, row: 6, column: 14, category: ElementCategory.PostTransitionMetal },
  { symbol: 'Bi', name: 'Bismuth', atomicNumber: 83, row: 6, column: 15, category: ElementCategory.PostTransitionMetal },
  { symbol: 'Po', name: 'Polonium', atomicNumber: 84, row: 6, column: 16, category: ElementCategory.PostTransitionMetal },
  { symbol: 'At', name: 'Astatine', atomicNumber: 85, row: 6, column: 17, category: ElementCategory.Halogen },
  { symbol: 'Rn', name: 'Radon', atomicNumber: 86, row: 6, column: 18, category: ElementCategory.NobleGas },

  // Row 7
  { symbol: 'Fr', name: 'Francium', atomicNumber: 87, row: 7, column: 1, category: ElementCategory.AlkaliMetal },
  { symbol: 'Ra', name: 'Radium', atomicNumber: 88, row: 7, column: 2, category: ElementCategory.AlkalineEarthMetal },
  { symbol: 'Ac', name: 'Actinium', atomicNumber: 89, row: 7, column: 3, category: ElementCategory.Actinide },
  { symbol: 'Rf', name: 'Rutherfordium', atomicNumber: 104, row: 7, column: 4, category: ElementCategory.TransitionMetal },
  { symbol: 'Db', name: 'Dubnium', atomicNumber: 105, row: 7, column: 5, category: ElementCategory.TransitionMetal },
  { symbol: 'Sg', name: 'Seaborgium', atomicNumber: 106, row: 7, column: 6, category: ElementCategory.TransitionMetal },
  { symbol: 'Bh', name: 'Bohrium', atomicNumber: 107, row: 7, column: 7, category: ElementCategory.TransitionMetal },
  { symbol: 'Hs', name: 'Hassium', atomicNumber: 108, row: 7, column: 8, category: ElementCategory.TransitionMetal },
  { symbol: 'Mt', name: 'Meitnerium', atomicNumber: 109, row: 7, column: 9, category: ElementCategory.TransitionMetal },
  { symbol: 'Ds', name: 'Darmstadtium', atomicNumber: 110, row: 7, column: 10, category: ElementCategory.TransitionMetal },
  { symbol: 'Rg', name: 'Roentgenium', atomicNumber: 111, row: 7, column: 11, category: ElementCategory.TransitionMetal },
  { symbol: 'Cn', name: 'Copernicium', atomicNumber: 112, row: 7, column: 12, category: ElementCategory.TransitionMetal },
  { symbol: 'Nh', name: 'Nihonium', atomicNumber: 113, row: 7, column: 13, category: ElementCategory.PostTransitionMetal },
  { symbol: 'Fl', name: 'Flerovium', atomicNumber: 114, row: 7, column: 14, category: ElementCategory.PostTransitionMetal },
  { symbol: 'Mc', name: 'Moscovium', atomicNumber: 115, row: 7, column: 15, category: ElementCategory.PostTransitionMetal },
  { symbol: 'Lv', name: 'Livermorium', atomicNumber: 116, row: 7, column: 16, category: ElementCategory.PostTransitionMetal },
  { symbol: 'Ts', name: 'Tennessine', atomicNumber: 117, row: 7, column: 17, category: ElementCategory.Halogen },
  { symbol: 'Og', name: 'Oganesson', atomicNumber: 118, row: 7, column: 18, category: ElementCategory.NobleGas },

  // Lanthanides (Row 8)
  { symbol: 'Ce', name: 'Cerium', atomicNumber: 58, row: 8, column: 4, category: ElementCategory.Lanthanide },
  { symbol: 'Pr', name: 'Praseodymium', atomicNumber: 59, row: 8, column: 5, category: ElementCategory.Lanthanide },
  { symbol: 'Nd', name: 'Neodymium', atomicNumber: 60, row: 8, column: 6, category: ElementCategory.Lanthanide },
  { symbol: 'Pm', name: 'Promethium', atomicNumber: 61, row: 8, column: 7, category: ElementCategory.Lanthanide },
  { symbol: 'Sm', name: 'Samarium', atomicNumber: 62, row: 8, column: 8, category: ElementCategory.Lanthanide },
  { symbol: 'Eu', name: 'Europium', atomicNumber: 63, row: 8, column: 9, category: ElementCategory.Lanthanide },
  { symbol: 'Gd', name: 'Gadolinium', atomicNumber: 64, row: 8, column: 10, category: ElementCategory.Lanthanide },
  { symbol: 'Tb', name: 'Terbium', atomicNumber: 65, row: 8, column: 11, category: ElementCategory.Lanthanide },
  { symbol: 'Dy', name: 'Dysprosium', atomicNumber: 66, row: 8, column: 12, category: ElementCategory.Lanthanide },
  { symbol: 'Ho', name: 'Holmium', atomicNumber: 67, row: 8, column: 13, category: ElementCategory.Lanthanide },
  { symbol: 'Er', name: 'Erbium', atomicNumber: 68, row: 8, column: 14, category: ElementCategory.Lanthanide },
  { symbol: 'Tm', name: 'Thulium', atomicNumber: 69, row: 8, column: 15, category: ElementCategory.Lanthanide },
  { symbol: 'Yb', name: 'Ytterbium', atomicNumber: 70, row: 8, column: 16, category: ElementCategory.Lanthanide },
  { symbol: 'Lu', name: 'Lutetium', atomicNumber: 71, row: 8, column: 17, category: ElementCategory.Lanthanide },

  // Actinides (Row 9)
  { symbol: 'Th', name: 'Thorium', atomicNumber: 90, row: 9, column: 4, category: ElementCategory.Actinide },
  { symbol: 'Pa', name: 'Protactinium', atomicNumber: 91, row: 9, column: 5, category: ElementCategory.Actinide },
  { symbol: 'U', name: 'Uranium', atomicNumber: 92, row: 9, column: 6, category: ElementCategory.Actinide },
  { symbol: 'Np', name: 'Neptunium', atomicNumber: 93, row: 9, column: 7, category: ElementCategory.Actinide },
  { symbol: 'Pu', name: 'Plutonium', atomicNumber: 94, row: 9, column: 8, category: ElementCategory.Actinide },
  { symbol: 'Am', name: 'Americium', atomicNumber: 95, row: 9, column: 9, category: ElementCategory.Actinide },
  { symbol: 'Cm', name: 'Curium', atomicNumber: 96, row: 9, column: 10, category: ElementCategory.Actinide },
  { symbol: 'Bk', name: 'Berkelium', atomicNumber: 97, row: 9, column: 11, category: ElementCategory.Actinide },
  { symbol: 'Cf', name: 'Californium', atomicNumber: 98, row: 9, column: 12, category: ElementCategory.Actinide },
  { symbol: 'Es', name: 'Einsteinium', atomicNumber: 99, row: 9, column: 13, category: ElementCategory.Actinide },
  { symbol: 'Fm', name: 'Fermium', atomicNumber: 100, row: 9, column: 14, category: ElementCategory.Actinide },
  { symbol: 'Md', name: 'Mendelevium', atomicNumber: 101, row: 9, column: 15, category: ElementCategory.Actinide },
  { symbol: 'No', name: 'Nobelium', atomicNumber: 102, row: 9, column: 16, category: ElementCategory.Actinide },
  { symbol: 'Lr', name: 'Lawrencium', atomicNumber: 103, row: 9, column: 17, category: ElementCategory.Actinide }
];

// Create a 2D array to represent the periodic table grid
export const createPeriodicTableGrid = (): (Element | null)[][] => {
  // Create empty 10x18 grid (7 normal rows + 2 for lanthanides/actinides + 1 empty row between them)
  const grid: (Element | null)[][] = Array(10).fill(null).map(() => Array(18).fill(null));
  
  // Fill the grid with elements
  elements.forEach(element => {
    grid[element.row - 1][element.column - 1] = element;
  });
  
  return grid;
};

// Function to get a random element for the game
export const getRandomElement = (): Element => {
  const randomIndex = Math.floor(Math.random() * elements.length);
  return elements[randomIndex];
};

// Get element color by category
export const getCategoryColor = (category: ElementCategory): string => {
  switch (category) {
    case ElementCategory.AlkaliMetal:
      return 'bg-red-500';
    case ElementCategory.AlkalineEarthMetal:
      return 'bg-orange-400';
    case ElementCategory.TransitionMetal:
      return 'bg-yellow-300';
    case ElementCategory.PostTransitionMetal:
      return 'bg-green-300';
    case ElementCategory.Metalloid:
      return 'bg-teal-400';
    case ElementCategory.Nonmetal:
      return 'bg-blue-400';
    case ElementCategory.Halogen:
      return 'bg-indigo-400';
    case ElementCategory.NobleGas:
      return 'bg-purple-400';
    case ElementCategory.Lanthanide:
      return 'bg-pink-300';
    case ElementCategory.Actinide:
      return 'bg-pink-500';
    default:
      return 'bg-gray-300';
  }
};