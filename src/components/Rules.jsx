import React from 'react';
import styled from 'styled-components';

const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to play dice game</h2>

            <ul>
                <li>Select any number.</li>
                <li>Click on dice image.</li>
                <li>after click on  dice  if selected number is equal to dice number you will get same point as dice.</li>
                <li>if you get wrong guess then  1 point will be dedcuted.</li>

            </ul>
          
        </RulesContainer>
    );
}

export default Rules;

const RulesContainer = styled.div`
 background-color: pink;
 padding: 20px;
 border-radius: 10px;

 h2{
 font-size: 24px;
 text-decoration: underline;
 }
 

 ul{
 margin-top: 1rem;

 }

`
