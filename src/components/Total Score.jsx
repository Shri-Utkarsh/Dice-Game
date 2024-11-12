import React from "react";
import styled from "styled-components";
const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
max-width: 200px
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }

  p{
    font-size: 24px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
     h1 {
    font-size: 40px;
    line-height: 40px;
  }
    p{
    font-size: 12px;
    font-weight: 500;
  }
  }


`;
