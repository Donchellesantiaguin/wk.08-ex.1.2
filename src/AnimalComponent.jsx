export default function AnimalComponent({ animal, onFocus, onDelete }) {
  return (
    <div className="animal">
      <strong>{animal.name}</strong>
      <div>
        {/* Display the animal image */}
        <img src={animal.image} alt={animal.name} className="animal-image" />
      </div>
      <div>
        <button onClick={() => onFocus(animal.name)}>Focus</button>
        <button onClick={() => onDelete(animal.name)}>Delete</button>
      </div>
    </div>
  );
}
