import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import useGetData from "./hooks/getData";

function App() {
  const shows = useGetData("http://api.tvmaze.com/schedule");
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;
  const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => (props.primary ? "palevioletred" : "white")};
    color: ${props => (props.primary ? "white" : "palevioletred")};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  `;
  return (
    <div className="App">
      <h1>Api TV</h1>
      <div>
        {shows.map(show => (
          <div>
            <Title>{show.name}</Title>
            <img src={show.show.image.medium} alt="" />
            <Button primary>Hola</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
