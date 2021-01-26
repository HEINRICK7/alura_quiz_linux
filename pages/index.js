import styled from 'styled-components';
import db from '../db.json';
import Widget from '../src/components/Widget';

import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';


/*const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1; 

  h1 {
    font-family: 'MrRobot';
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    text-align: center;
    color: #e5627c;
  }
`;*/

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
export default function Home() {
  return (
    < QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
             <h1>mr.Robot</h1>
          </Widget.Header>
          <Widget.Content>
            <p>lorem ipsum dolor sit amet...</p>
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
  )

}
