import React from "react";

import styled from "styled-components";

const NumberSelector = ({ selectedNumber, setSelectedNumber }) => {
  const DiceNumber = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelectorContainer>
      <div className="flex">
        {DiceNumber.map((value, i) => (
          <Box
            isSelected={selectedNumber === value}
            key={i}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
    text-align: end;
  }

  @media (max-width: 768px) {
    .flex {
      gap: 8px;
      justify-content: end;
    }
    p {
      font-size: 15px;
    }
  }
`;

const Box = styled.div`
  border: 1px solid black;
  height: 72px;
  width: 72px;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? "black" : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};

  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
    font-size: 15px;
  }
`;
