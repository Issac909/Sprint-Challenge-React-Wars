import React from "react";
import styled from "styled-components";

export const MainContainer = styled.div`
    display: grid;
    width: 100%;
    font-size: 62.5%;
    grid-template: "CardContainer CardContainer CardContainer";
    grid-gap: 10px;
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 100%;
    text-align: center;
    background: rgba(55, 55, 55, 0.5);
    border-bottom: 2px solid black;
`;

export const H1 = styled.h1`
    font-size: 1.5rem
    color: yellow;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
`;

export const Birth = styled.h2`
    font-size: 1rem;
    color: skyblue;
    font-weight: 800;
    letter-spacing: 0.3em;
`;

export const Characteristics = styled.ul`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    list-style: none;
    border-top: 2px solid black;
    padding: 1em 0;
    line-height: 4.5em;
`;

export const Physics = styled.p`
    font-size: 1rem;
    color: silver;
    font-weight: 950;
`;

export const Li = styled.li`
    font-size: 1.5rem;
    color: yellow;
`;