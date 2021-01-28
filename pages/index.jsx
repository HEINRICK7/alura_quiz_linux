import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

import Input from '../src/components/Input'


import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  margin-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding:15px;
  }
`;

const Button = styled.button`
  margin-left: 16px;
  width: 245px;
  height: 40px;
  border: 0;
  border-radius: 3px;

  ${props => props.disabled ? css`
    background: #a5a0a0;
    cursor: not-allowed;
    color: #615e5e;
  
  `: css `
  
  background: #e5627c;
  cursor: pointer;
  color: #FFFF;
  
  `};

`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>mr.Robot</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={(event) => {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}>
                
                <Input 
                placeholder=" Digite seu nome"
                onChange={(event) => {
                    setName(event.target.value);
                }}
                />
                <Button
                  type="submit" disabled={name.length === 0}
                  > Jogar 
                </Button>
                
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quiz mr.Robot</h1>
              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/HEINRICK7/alura_quiz_mr.robot" />
      </QuizBackground>
    </>
  );
}
