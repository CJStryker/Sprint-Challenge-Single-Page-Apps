import React from "react";
import styled from "styled-components";

const DivStyle = styled.div`
  background: white;
  color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  width: 95%;
  border: 5px solid white;
`;

const ParStyle = styled.p`
  background: white;
  color: black;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  width: 95%;
  border: 5px solid white;
  border-radius: 5px;
`;

export default function CharacterCard(props) {
  return (
    <DivStyle key={props.id}>
      <div
      >
        <ParStyle>Name: {props.name}</ParStyle>
        <ParStyle>Species: {props.species}</ParStyle>
        <ParStyle>Origin: {props.origin.name} </ParStyle>
      </div>
    </DivStyle>
  );
}
