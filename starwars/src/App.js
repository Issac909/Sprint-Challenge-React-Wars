import React, { useState, useEffect} from "react";
import './App.css';
import axios from "axios";
import StarWarsCharacter from "./components/CharacterInfo";
import { MainContainer } from "./components/CharacterCard";

const App = () => {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
      axios
      .get(`https://swapi.co/api/people`)
      .then(response => {
          console.log(response);
          setFacts(response.data.results);
          console.log(response.data.results);
      })
      .catch(err => {
          console.error(err);
      });
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        <MainContainer>
          {facts.map(fact => {
            return <StarWarsCharacter name = {fact.name} birthYear = {fact.birth_year} mass = {fact.mass} height = {fact.height} gender = {fact.gender} hairColor = {fact.hair_color} eyeColor = {fact.eye_color} skinColor = {fact.skinColor} />
            
          })}
        </MainContainer>
    </div>
  );
}

export default App;
