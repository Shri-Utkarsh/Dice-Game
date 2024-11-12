import styled from "styled-components";
import { Button } from "./styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices 1.svg" alt="" />
      </div>
      <div className="content">
        <h1>The Dice Game</h1>
        <Button onClick={toggle}>Start Game</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 70px;
      white-space: nowrap;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;

    img{
      width: 100%;
    }

    .content {
      h1 {
        font-size: 30px;

      }
    }
  }
`;
