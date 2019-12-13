import React from "react";
import { CardContainer, H1, Birth, Characteristics, Physics, Li } from "./CharacterCard";

const StarWarsCharacter = (props) =>{
    return (
            <CardContainer>
                <H1>{props.name}</H1>
                <Birth>Birth Year: {props.birthYear}</Birth>
                <Physics>Mass: {props.mass}kg,  Height: {props.height}cm</Physics>
                <Characteristics>
                    <Li>Gender: {props.gender}</Li>
                    <Li>Hair Color: {props.hairColor}</Li>
                    <Li>Eye Color: {props.eyeColor}</Li>
                    <Li>Skin Color: {props.skinColor}</Li>
                </Characteristics>
            </CardContainer>
    )
}

export default StarWarsCharacter;