import React, { useState } from "react";
import styled from "styled-components";
import TotalScore from "./Total Score";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { Button } from "./styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [showRules, setShowRules] = useState(false);

    // Generate Randome Numbers
    const generateRandomwNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
      };
    
      // Roll Dice to get dice image according to the randome number
      const rollDice = () => {
        if(!selectedNumber) return alert("Select Number");
        const randomNumber = generateRandomwNumber(1, 7);
        setCurrentDice((prev) => randomNumber);

        // Check if selected number is equal to random number and update score
        if(selectedNumber === randomNumber){
          setScore((prev) => prev + selectedNumber);
        }else{
            setScore((prev) => prev - 1);
        }
        setSelectedNumber(undefined)    // reset selected number
      };

      const resetGame = () => {
        setScore(0);
        setCurrentDice(1);
        setSelectedNumber(undefined);
      }
    


  return (
    <MainConatiner>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RoleDice currentDice={currentDice} rollDice={rollDice}/>
      <div className="btns">
        <Button onClick={resetGame} >Reset Game</Button>
        <Button
        onClick={() => setShowRules((prev) => !prev)}
        >{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showRules && <Rules/>}
    </MainConatiner>
  );
};

export default GamePlay;

const MainConatiner = styled.main`
  .top_section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
    .btns{
    display:flex;
    flex-direction: column;
    margin: 2rem auto;
    align-items: center;
    gap: 24px;
    max-width: 200px
    }

`;
