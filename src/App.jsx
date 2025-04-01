import { useState } from 'react';
import './App.css';
import AnimalComponent from './AnimalComponent';

function App() {
  const [headline, setHeadline] = useState("Donnie's list of animals");

  const [animals, setAnimals] = useState([
    { name: 'Lion', image: 'https://images.pexels.com/photos/2323411/pexels-photo-2323411.jpeg?cs=srgb&dl=pexels-ralph-407274-2323411.jpg&fm=jpg' }, 
    { name: 'Elephant', image: 'https://images.pexels.com/photos/70080/elephant-africa-african-elephant-kenya-70080.jpeg?cs=srgb&dl=pexels-pixabay-70080.jpg&fm=jpg' }, 
    { name: 'Tiger', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Tiger_in_the_water.jpg' }, 
    { name: 'Giraffe', image: 'https://images.pexels.com/photos/39504/giraffe-animal-funny-facial-expression-39504.jpeg?cs=srgb&dl=pexels-pixabay-39504.jpg&fm=jpg' } 
  ]);

  const updateHeadline = (animalName) => {
    setHeadline(`${animalName} is the focus!`);
  };

  const deleteAnimal = (animalName) => {
    setAnimals((prevAnimals) => prevAnimals.filter(animal => animal.name !== animalName));
  };

  return (
    <div className="App">
      <h1>{headline}</h1>
      {animals.map((animal) => {
        return (
          <AnimalComponent
            key={animal.name}
            animal={animal}
            onFocus={updateHeadline}
            onDelete={deleteAnimal}
          />
        );
      })}
    </div>
  );
}

export default App;
