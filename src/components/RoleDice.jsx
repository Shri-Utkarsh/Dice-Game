import React from "react";
import styled from "styled-components";

const RoleDice = ({ currentDice, rollDice }) => {

  return (
    <DiceConatiner>
      <div className="dice">
        <img
          onClick={rollDice}
          src={`/Dice/dice_${currentDice}.png`}
          alt="Dice img"
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceConatiner>
  );
};

export default RoleDice;

const DiceConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
