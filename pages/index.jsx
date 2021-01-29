import React, { useState } from 'react';
import { useRouter } from 'next/router';

import Input from '../src/components/Input';
import Button from '../src/components/Button';


import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';


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
              <h1>Quiz Linux</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={(event) => {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}>
                
                <Input
                name="nameFulano"
                value={name}
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
