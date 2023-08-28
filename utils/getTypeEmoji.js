export default function getTypeEmoji(type) {
  switch (type) {
    case "Fire":
      return "🔥";
    case "Water":
      return "💧";
    case "Grass":
      return "🌿";
    case "Electric":
      return "⚡️";
    case "Poison":
      return "☠️";
    case "Flying":
      return "🦅";
    case "Bug":
      return "🐛";
    case "Normal":
      return "👤";
    case "Ground":
      return "⛰";
    case "Fighting":
      return "🥊";
    case "Psychic":
      return "🔮";
    case "Rock":
      return "🪨";
    case "Ghost":
      return "👻";
    case "Ice":
      return "🧊";
    case "Dragon":
      return "🐉";
    case "Fairy":
      return "🧚";
    default:
      return "👽";
  }
}
