import ChessOpeningCard from './ChessOpeningCard';

const openings = [
  {
    title: "King's Gambit",
    description: "An opening where white offers a pawn to divert the black e-pawn. It's one of the oldest known chess openings, characterized by aggressive play.",
    imageUrl: "https://raw.githubusercontent.com/Gasoil-Gfx/assets/main/images/opening1.png",
    altText: "kings gambit opening",
  },
  {
    title: "Sicilian Dragon",
    description: "Part of the Sicilian Defense family, the Dragon variation emerges with a pawn structure that invites confrontation.",
    imageUrl: "https://raw.githubusercontent.com/Gasoil-Gfx/assets/main/images/opening2.png",
    altText: "kings gambit opening",
  },
  {
    title: "Evans Gambit",
    description: "An aggressive line from the Italian Game where white sacrifices a pawn early for r evelopment and attacking chances.",
    imageUrl: "https://raw.githubusercontent.com/Gasoil-Gfx/assets/main/images/opening3.png",
    altText: "kings gambit opening",
  },
  {
    title: "Smith-Morra Gambit",
    description: "An opening against the Sicilian Defense, white sacrifices a pawn to accelerate development and initiate an attack.",
    imageUrl: "https://raw.githubusercontent.com/Gasoil-Gfx/assets/main/images/opening4.png",
    altText: "kings gambit opening",

  },
  {
    title: "Najdorf Variation",
    description: "Another line of the Sicilian Defense, this opening leads to complex and aggressive play from both sides, favored by many champions.",
    imageUrl: "https://raw.githubusercontent.com/Gasoil-Gfx/assets/main/images/opening5.png",
    altText: "kings gambit opening",

  }
];

function App() {
  return (
    <div>
      <h1>5 Aggressive Chess Openings</h1>
      <div className="cards-container">
        {openings.map((opening, index) => (
          <ChessOpeningCard key={index} cardClass={`card${index + 1}`} {...opening} />
        ))}
      </div>
    </div>
  );
}

export default App;
