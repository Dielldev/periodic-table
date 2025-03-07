# Periodic Table Game

An interactive educational game built with React and TypeScript to help students learn the positions of elements in the periodic table.

## Features

- Interactive periodic table with color-coded element categories
- Three difficulty levels:
  - Easy (5 attempts)
  - Medium (3 attempts)
  - Hard (1 attempt)
- Score tracking system
- Color-coded element categories for better visualization
- Responsive design that works on both desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm start
```

The application will open in your default browser at [http://localhost:3000](http://localhost:3000).

## How to Play

1. Select your desired difficulty level (Easy, Medium, or Hard)
2. Click "Generate Element" to start the game
3. Find and click the correct position of the given element in the periodic table
4. You have a limited number of attempts based on the difficulty level
5. Score points based on:
   - Number of remaining attempts
   - Difficulty level selected
   - Successful identification of elements

## Element Categories

The periodic table is color-coded by element categories:
- Alkali Metals
- Alkaline Earth Metals
- Transition Metals
- Post-Transition Metals
- Metalloids
- Nonmetals
- Halogens
- Noble Gases
- Lanthanides
- Actinides

## Technologies Used

- React 19
- TypeScript
- Tailwind CSS
- Jest and React Testing Library (for testing)

## Development

This project was bootstrapped with Create React App and uses TypeScript for type safety. The codebase is structured as follows:

```
src/
  ├── components/     # React components
  ├── data/          # Element data and utilities
  ├── types/         # TypeScript type definitions
  └── App.tsx        # Main application component
```

## Scripts

- `npm start` - Run the development server
- `npm test` - Run tests
- `npm run build` - Create production build
- `npm run eject` - Eject from Create React App

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## Author

Diell Govori

## License

This project is open source and available under the MIT License.
